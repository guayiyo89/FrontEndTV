import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  userList = [];
  nuevoflag = false;
  editflag = false;
  useredit : Usuario;

  constructor(public user:UsuarioService, public _router: Router) { }

  ngOnInit() {
    this.user.getUsers().subscribe(
      users => {
        this.userList = users;
        console.log(this.userList)
      }
    )
  }

  nuevo(){
    this.nuevoflag = true;
    this.editflag = false;
  }

  edit(id:any){
    console.log(id);
    this.editflag = true;
    this.nuevoflag = false;
    this.user.getUser(id).subscribe( data => {
      console.log(data);
      this.useredit = data})
  }

}
