import { Injectable } from '@angular/core';
import { Canal } from '../interfaces/canal.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  baseUrl = 'http://localhost:3000/canales';
  constructor(public http: HttpClient, public _user: UsuarioService) { }

  getCanales(){
    let url = this.baseUrl;
    return this.http.get<Canal[]>(url)
  }

  getCanal(id:any){
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Canal>(url)
  }

  buscarCanal(palabra:string){
    let url = `${this.baseUrl}/buscar/${palabra}`;
    return this.http.get<Canal[]>(url)
  }

  canalesbyZonal(zonal:string){
    let url = `${this.baseUrl}/zonal/${zonal}`;
    return this.http.get<Canal[]>(url)
  }

  addCanal(canal: Canal){
    let url = this.baseUrl;
    url += '?token=' + this._user.token;
    return this.http.post(url, canal);
  }

  editCanal(canal: Canal){
    let url = `${this.baseUrl}/${canal._id}`;
    url += '?token=' + this._user.token;
    return this.http.put(url, canal);
  }

  deleteCanal(id: string){
    let url = `${this.baseUrl}/${id}`;
    url += '?token=' + this._user.token;
    return this.http.delete(url);
  }
}
