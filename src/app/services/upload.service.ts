import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_UPLOAD } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(public http: HttpClient, private _usuarioService: UsuarioService) { }

  subirVariosArchivos( archivos: File[], tipo: string ) {
    const file = new FormData();

    for(let a in archivos){
        file.append('archivo'+a, archivos[a]);    // agrega los archivos al arreglo
    }
    return this.http.post(URL_UPLOAD+ '/'+ tipo + this._usuarioService.getToken(), file);
  }

  obtenerArchivo( nombreArchivo: string ) {
    console.log(nombreArchivo);
    return this.http.get(URL_UPLOAD + '/' + nombreArchivo + this._usuarioService.getToken());
  }
}
