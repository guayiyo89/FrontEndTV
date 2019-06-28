import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  URL_SERVICIOS = 'http://localhost:3000';

  constructor(public http: HttpClient, public router: Router) {
    this.loadStorage();
  }

  isLogin(){
    return (this.token.length > 5) ? true: false;
  }

  // Para no perder la info al presionar F5
  loadStorage() {
    if (localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  // Guardado en LS
  guardadoLs( id: string, token: string, usuario: Usuario ) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify( usuario ));

    this.usuario = usuario;
    this.token = token;
  }

  // LOG OUT
  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  login( usuario: Usuario, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = this.URL_SERVICIOS + '/login';
    return this.http.post( url, usuario ).pipe(
      map((resp:any) => {
        this.guardadoLs(resp.id, resp.token, resp.usuario);
        return true;
      })
    )
  }
}
