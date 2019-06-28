import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import { Canal } from 'src/app/interfaces/canal.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-buscar-canal',
  templateUrl: './buscar-canal.component.html',
  styleUrls: ['./buscar-canal.component.css']
})
export class BuscarCanalComponent implements OnInit {

  canalList: Canal[] = [];
  public palabra: string = '';

  constructor(public _channel: CanalService, private _route: ActivatedRoute) { }

  buscaChannel(){

    if(this.palabra.length == 0){
      return;
    }

    this._channel.buscarCanal(this.palabra).subscribe(
      channels => {
        this.canalList = channels;
        console.log(this.canalList);
      }
    );

  }

  ngOnInit(){
    console.log('Yeah!');
  }
}
