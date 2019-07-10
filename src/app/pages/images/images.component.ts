import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/services/upload-image.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styles: []
})
export class ImagesComponent implements OnInit {

  uploadFile: Array <File>;

  constructor(private uploading: UploadImageService, private http: HttpClient) { }

  ngOnInit() {
  }

  fileChange(element) {
    this.uploadFile = element.target.files[0];
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadFile.length; i++){
      formData.append("uploads[]", this.uploadFile[i], this.uploadFile[i].name);
    }
    this.uploading.postFileImagen(formData).subscribe(
      res => {
        console.log('La respuesta es...', res)
      }
    )
  }

}
