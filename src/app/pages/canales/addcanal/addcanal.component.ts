import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

declare var swal: any;

@Component({
  selector: 'app-addcanal',
  templateUrl: './addcanal.component.html'
})
export class AddcanalComponent implements OnInit {

  constructor(public _canalSvc: CanalService, private router: Router, private _fbuilder: FormBuilder) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this._fbuilder.group({
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required],
      zonal: ['', Validators.required],
      urlPng: '',
      urlVisio: '',
      urlEncoder: ''
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.addForm.valid){
      this._canalSvc.addCanal(this.addForm.value).subscribe(
        data =>{
          console.log(data);
        }
      )
      Swal.fire({
        title: 'Listo!',
        text: 'Canal creado correctamente',
        type: 'success',
        confirmButtonText: 'OK!',
      })
    }

    this.meVoy();
  }

  meVoy(){
    return this.router.navigate(['/admin']);
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
