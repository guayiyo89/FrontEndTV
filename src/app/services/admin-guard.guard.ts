import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2';

@Injectable()
export class AdminGuardGuard implements CanActivate {

  constructor( public _userService: UsuarioService, public router: Router ) {}

  canActivate() {

    if (this._userService.isLogin()) {
      console.log('Paso la Guardia');
      if (this._userService.usuario.userrole === 'ADMIN_ROLE'){
        console.log('Admin!');
        return true;
      } else {
          console.log('user!');
          Swal.fire({
              title: 'Acceso Denegado',
              text: 'No posee las credenciales necesarias',
              type: 'warning'
          })
          this.router.navigate(['/canales']);
          return false;
      }
    } else {
      console.log('Bloqueado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}