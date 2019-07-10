import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/interfaces/canal.model';
import { CanalService } from 'src/app/services/canal.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  canalList: Canal[] = [];
  public palabra: string = '';

  constructor(public _channel: CanalService, private _route: ActivatedRoute, private router: Router) { }

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

  ngOnInit() {
  }

  updateCanal(canal: Canal){
    localStorage.removeItem("canalId");
    localStorage.setItem("canalId", canal._id);
    this.router.navigate(['/canal']);
  }

  deleteCanal(canal: Canal){
    this._channel.deleteCanal(canal._id).subscribe(
      data => {
        console.log(data);
        this.palabra = '';
      });
  }

}
