import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(public sidebar: SidebarService, public user: UsuarioService) {  }

  ngOnInit() {
    this.usuario = this.user.usuario;
  }

  logout(){
    this.user.logout();
  }

}
