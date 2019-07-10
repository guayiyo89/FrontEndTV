import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CanalService } from 'src/app/services/canal.service';
import { Canal } from 'src/app/interfaces/canal.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editcanal',
  templateUrl: './editcanal.component.html'
})
export class EditcanalComponent implements OnInit {

  constructor(private _fbuilder: FormBuilder, private router: Router, private _canalSvc: CanalService, private _route: ActivatedRoute) { }

  canal: Canal;
  editForm: FormGroup;
  submitted = false;

  ngOnInit() {
    let canalId = localStorage.getItem("canalId");
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

}
