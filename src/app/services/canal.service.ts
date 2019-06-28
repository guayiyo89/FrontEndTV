import { Injectable } from '@angular/core';
import { Canal } from '../interfaces/canal.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  baseUrl = 'http://localhost:3000/canales';
  constructor(public http: HttpClient) { }

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
}
