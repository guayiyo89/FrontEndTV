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



}
