import { Injectable } from '@angular/core';

@Injectable()

export class SidebarService {
    menu:any = [
        {titulo: 'Home', url: '/canales', icono: ''},
        {titulo: 'Busqueda', url: '/busqueda', icono: ''},
        {titulo: 'Admin', url: '/admin', icono: ''},
        {titulo: 'AdminUser', url: '/usuarios', icono: ''},
    ];
    constructor() { }
};
