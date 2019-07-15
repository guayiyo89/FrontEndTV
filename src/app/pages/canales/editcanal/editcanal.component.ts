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

  archivos = [];
  imagen: any;

  ngOnInit() {
    this._archivoService.getArchivos().subscribe(ars=>{
      this.archivos = ars;
      this.imagen = this.archivos[0];
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
        console.log(data);
        this.editForm.patchValue(data); // Reescribimos?
        this.canal = data;
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

  subirImg(){
    this._load.uploadFile(this.imagenSubir,this.idChannel)
      .then( resp => {
        console.log(resp);
        Swal.fire({
          title: 'Archivo Subido!',
          text: 'El archivo subió correctamente',
          type: 'success'
        })
      })
      .catch( resp => {
        console.log('Error :(');
        Swal.fire({
          title: 'Fallo',
          text: 'Algo ocurrió en el camino, que nos perdimos.',
          type: 'error'
        })
      })
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
 
  subir(modal, uploader){

    console.log("UPL:::", uploader)
    this._uploadService.subirVariosArchivos(uploader.files).subscribe(res=>{
      let respuesta = <any>{};
      respuesta = res;
      let newArchivo = {nombre: this.nombre_imagen, tipo: 'imagen', url: respuesta.archivos[0]}
      this._archivoService.addArchivo(newArchivo).subscribe(ar =>{
        console.log(ar);
        this.archivos.push(ar);
        Swal.fire({
          title: 'Listo!',
          text: 'Imagen Subida',
          type: 'success',
          confirmButtonText: 'OK!',
        })
      });
      modal.close();
    });
  }

  asignar(){
    this.canal.archivos.push(this.imagen);

    this._canalSvc.editCanal(this.canal).subscribe(res=>{
      console.log(res);
      Swal.fire({
        title: 'Listo!',
        text: 'Imagen Agregada al Canal',
        type: 'success',
        confirmButtonText: 'OK!',
      })
    });
  }
  seleccionaImagen(even: any){
    this.imagen = even;
    console.log(this.imagen);
  }

  deleteFoto(foto){
    this.canal.archivos.splice(this.canal.archivos.indexOf(foto),1);
    this._canalSvc.editCanal(this.canal).subscribe(res=>{
      
      Swal.fire({
        title: 'Listo!',
        text: 'Imagen Eliminada del Canal',
        type: 'success',
        confirmButtonText: 'OK!',
      })

    });
  }

}
