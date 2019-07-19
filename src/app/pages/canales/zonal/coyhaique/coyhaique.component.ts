import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/interfaces/canal.model';
import { CanalService } from 'src/app/services/canal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coyhaique',
  templateUrl: './coyhaique.component.html'
})
export class CoyhaiqueComponent implements OnInit {

  canales: Canal[] = [];

  constructor(public _channel: CanalService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this._channel.canalesbyZonal('Coyhaique').subscribe(
      channel => {
        this.canales = channel;
      }
    )
  }

}
