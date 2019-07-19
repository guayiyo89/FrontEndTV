import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import { Canal } from 'src/app/interfaces/canal.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-canal',
  templateUrl: './buscar-canal.component.html'
})
export class BuscarCanalComponent implements OnInit {

  canalList: Canal[] = [];
  public palabra: string = '';
  allCanal: Canal[];

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

  listarChannel(){
    this._channel.getCanales().subscribe(
      channels => {
        this.allCanal = channels;
      }
    )
  }

  ngOnInit(){
    console.log('Yeah!');
    this.listarChannel();
  }
}

