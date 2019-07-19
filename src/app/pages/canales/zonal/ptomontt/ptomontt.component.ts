import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/interfaces/canal.model';
import { CanalService } from 'src/app/services/canal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ptomontt',
  templateUrl: './ptomontt.component.html'
})
export class PtomonttComponent implements OnInit {

  canales: Canal[] = [];

  constructor(public _channel: CanalService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._channel.canalesbyZonal('PtoMontt').subscribe(
      channel => {
        this.canales = channel;
      }
    )
  }

}
