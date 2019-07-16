import { Component, OnInit } from '@angular/core';
import { CanalService } from '../../services/canal.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Canal } from '../../interfaces/canal.model';
import { UploadService } from 'src/app/services/upload.service';
import { URL_UPLOAD } from 'src/app/config/config';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {

  URL_UPLOAD = URL_UPLOAD;
  canal: Canal;
  imagenes = [];
  archivos = [];
  constructor(public _channel:CanalService, private _route:ActivatedRoute, private _uploadService: UploadService) { }

  ngOnInit() {

    this._route.params.pipe
      (map(params => params['id'])).subscribe(
        id => {
          this._channel.getCanal(id).subscribe(
            channel => {
              this.canal = channel;
              this.imagenes = this.canal.archivos.filter(a=> a.tipo=='imagen');
              console.log(this.canal);
            }
          )
        }
      )
    

  }

  descargar(a){
    this._uploadService.obtenerArchivo('archivo/'+a.url).subscribe();
  }

}
