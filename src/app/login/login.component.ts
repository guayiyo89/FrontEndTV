import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public _user: UsuarioService) { }

  ngOnInit() {
  }

  ingresar(forma: NgForm) {

    if ( forma.invalid ) {
      Swal.fire({
        title: 'Intente Nuevamente',
        text: 'Usuario y/o contraseña incorrectos',
        type: 'warning'
      })
      return

    }
    
    let usuario = new Usuario(forma.value.username, forma.value.password, null ,null);

    this._user.login( usuario, forma.value.recuerdame )
      .subscribe(resp => {
        this.router.navigate(['/canales']);
      });

  }

}
