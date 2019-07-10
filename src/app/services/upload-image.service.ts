import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  public url_server = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  postFileImagen(data: FormData) {
    let url = this.url_server + '/upload';
    return this.http.post(url, data);
  }
}
