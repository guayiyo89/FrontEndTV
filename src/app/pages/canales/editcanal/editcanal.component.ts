import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CanalService } from 'src/app/services/canal.service';
import { Canal } from 'src/app/interfaces/canal.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { UploadImageService } from 'src/app/services/upload-image.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UploadService } from 'src/app/services/upload.service';
import { ArchivoService } from 'src/app/services/archivo.service';
@Component({
  selector: 'app-editcanal',
  templateUrl: './editcanal.component.html'
})
export class EditcanalComponent implements OnInit {

  constructor(private _fbuilder: FormBuilder, private router: Router
    , private _canalSvc: CanalService, private _route: ActivatedRoute
    , public _load: UploadImageService, private modalService: NgbModal
    , private _uploadService: UploadService
    , public _usuarioService: UsuarioService
    , private _archivoService: ArchivoService) { }

  imagenSubir: File;
  canal: Canal;
  editForm: FormGroup;
  submitted = false;
  idChannel: string;

  uploadedFiles: any[] = [];

  imagenes = [];    // todos los archivos
  archivos = [];    // todas las imagenes

  imagen: any;    //imagen seleccionado en el combo 
  archivo: any;   //archivo seleccionado en el combo 

  ngOnInit() {
    this._archivoService.getArchivos().subscribe(ars=>{
      this.archivos = ars;
      this.imagenes = ars.filter(a=> a.tipo=='imagen' );             
      this.archivos = ars.filter(a=> a.tipo=='archivo' ); 
      this.imagen = this.imagenes[0];            
      this.archivo = this.archivos[0];            
    });

    let canalId = localStorage.getItem("canalId");
    this.idChannel = canalId;
    if(!canalId){
      alert("Algo va mal! :(");
      this.router.navigate(['/canales']);
      return;
    }

    this.editForm = this._fbuilder.group({
      _id: [],
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required],
      zonal: ['', Validators.required],
      urlPng: '',
      urlVisio: '',
      urlEncoder: ''
    });


    
    this._canalSvc.getCanal(canalId).subscribe(
      data => {
        this.editForm.patchValue(data); // Reescribimos?
        this.canal = data;
        if(!this.canal.archivos){
          this.canal.archivos = [];
        }

        console.log(this.canal);
      }
    );
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.editForm.valid){
      this._canalSvc.editCanal(this.editForm.value).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/admin']);
        }
      )
    }
    Swal.fire({
      title: 'Listo!',
      text: 'Canal editado correctamente',
      type: 'success',
      confirmButtonText: 'OK!',
    })
  }

  seleccionImg( archivo: File ) {
    if (!archivo) {
      return;
    }

    this.imagenSubir = archivo;
  }

  closeResult: string;
  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  nombre_imagen = "";
 
  subir(modal, uploader, tipo){
    console.log("UPL:::", uploader)
    this._uploadService.subirVariosArchivos(uploader.files, tipo).subscribe(res=>{
    
      let respuesta = <any>{};
      respuesta = res;
      let newArchivo = {nombre: this.nombre_imagen, tipo: tipo, url: respuesta.archivos[0]}
      this._archivoService.addArchivo(newArchivo).subscribe(ar =>{
        console.log(ar);
        if(tipo=='imagen') this.imagenes.push(ar);
        if(tipo=='archivo') this.archivos.push(ar);
        Swal.fire({
          title: 'Listo!',
          text: 'Archivo subido !!',
          type: 'success',
          confirmButtonText: 'OK!',
        })
      });
      this.nombre_imagen = '';
      modal.close();
    });
  }

  asignar(tipo){
    if(tipo=='imagen') this.canal.archivos.push(this.imagen);
    if(tipo=='archivo') this.canal.archivos.push(this.archivo);
    
    this._canalSvc.editCanal(this.canal).subscribe(res=>{
      Swal.fire({
        title: 'Listo!',
        text: 'Imagen Agregada al Canal',
        type: 'success',
        confirmButtonText: 'OK!',
      })
    });
  }
  selecciona(even: any, tipo){
    if(tipo=='image') this.imagen = even;
    if(tipo=='archivo') this.archivo = even;
  }

  deleteFoto(foto){
    this.canal.archivos.splice(this.canal.archivos.indexOf(foto),1);
    this._canalSvc.editCanal(this.canal).subscribe(res=>{
      
      Swal.fire({
        title: 'Listo!',
        text: 'Archivo Eliminado del Canal',
        type: 'success',
        confirmButtonText: 'OK!',
      })

    });
  }

}
