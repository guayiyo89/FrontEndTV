import { Component, OnInit } from '@angular/core';
import { CanalService } from '../../services/canal.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Canal } from '../../interfaces/canal.model';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit {

  canal: Canal;

  constructor(public _channel:CanalService, private _route:ActivatedRoute) { }

  ngOnInit() {

    this._route.params.pipe
      (map(params => params['id'])).subscribe(
        id => {
          console.log(id)
          this._channel.getCanal(id).subscribe(
            channel => {
              this.canal = channel;
              console.log(this.canal);
            }
          )
        }
      )
    

  }

}
