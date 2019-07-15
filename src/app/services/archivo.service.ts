import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { URL_SERVICIOS } from '../config/config';
import { Archivo } from '../interfaces/archivo.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(public http: HttpClient, private _usuarioService: UsuarioService) { }


  addArchivo(archivo){
    return this.http.post(URL_SERVICIOS + '/archivos' + this._usuarioService.getToken(), archivo);
  }

  getArchivos(){
    return this.http.get<Archivo[]>(URL_SERVICIOS+'/archivos'+this._usuarioService.getToken());
  }
}
