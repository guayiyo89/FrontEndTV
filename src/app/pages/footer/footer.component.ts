import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor(public user:UsuarioService) { }

  ngOnInit() {
  }
  
  logout(){
    this.user.logout();
  }

}
