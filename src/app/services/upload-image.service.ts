import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  public url_server = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  uploadFile(archivo: File, id: string){

    return new Promise( (resolve, reject) => {

      let formdata = new FormData();
      let xhr = new XMLHttpRequest();

      formdata.append('file', archivo, archivo.name);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            console.log('Imagen Subida Correctamente');
            // la resp es un string y se pasa a formato JSON para guardarla en la DB
            resolve( JSON.parse(xhr.response) );
          } else {
            console.log('Fallo :(');
            reject( xhr.response );
          }

        }
      }

      let url = this.url_server + '/uploads/canales/' + id;

      xhr.open('PUT',url, true);
      xhr.send(formdata);
    })

    
  }
}
