import { Injectable } from '@angular/core';

@Injectable()

export class SidebarService {
    menu:any = [
        {titulo: 'Home', url: '/canales', icono: '', roles:['ADMIN_ROLE', 'USER_ROLE']},
        {titulo: 'Busqueda', url: '/busqueda', icono: '', roles:['ADMIN_ROLE', 'USER_ROLE']},
        {titulo: 'Admin', url: '/admin', icono: '', roles:['ADMIN_ROLE']},
        {titulo: 'AdminUser', url: '/usuarios', icono: '', roles:['ADMIN_ROLE']},
    ];
    constructor() { }
};
