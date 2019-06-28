import { Component, OnInit } from '@angular/core';
import { CanalService } from '../../services/canal.service';
import { ActivatedRoute } from '@angular/router';
import { Canal } from '../../interfaces/canal.model';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css']
})
export class CanalesComponent implements OnInit {

  canalList: Canal[] = [];

  constructor(public _channel:CanalService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._channel.getCanales().subscribe(
      channels => {
        this.canalList = channels;
        console.log(this.canalList);
      }
    )
  }

}
