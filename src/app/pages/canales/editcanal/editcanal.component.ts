import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CanalService } from 'src/app/services/canal.service';
import { Canal } from 'src/app/interfaces/canal.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-editcanal',
  templateUrl: './editcanal.component.html'
})
export class EditcanalComponent implements OnInit {

  constructor(private _fbuilder: FormBuilder, private router: Router, private _canalSvc: CanalService, private _route: ActivatedRoute, public _load: UploadImageService) { }

  imagenSubir: File;
  canal: Canal;
  editForm: FormGroup;
  submitted = false;
  idChannel: string;

  ngOnInit() {
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

}
