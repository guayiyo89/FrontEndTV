import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import { ActivatedRoute } from '@angular/router';
import { Canal } from 'src/app/interfaces/canal.model';

@Component({
  selector: 'app-valdivia',
  templateUrl: './valdivia.component.html'
})
export class ValdiviaComponent implements OnInit {

  canales: Canal[] = [];

  constructor(public _channel: CanalService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._channel.canalesbyZonal('Valdivia').subscribe(
      channel => {
        this.canales = channel;
      }
    )
  }

}
