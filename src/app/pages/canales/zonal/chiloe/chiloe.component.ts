import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';
import { ActivatedRoute } from '@angular/router';
import { Canal } from 'src/app/interfaces/canal.model';

@Component({
  selector: 'app-chiloe',
  templateUrl: './chiloe.component.html'
})
export class ChiloeComponent implements OnInit {

  canales: Canal[] = [];

  constructor(public _channel: CanalService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._channel.canalesbyZonal('Chiloe').subscribe(
      channel => {
        this.canales = channel;
      }
    )
  }

}
