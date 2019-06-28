import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CanalesComponent } from './canales/canales.component';
import { CanalComponent } from './canales/canal.component';
import { BuscarCanalComponent } from './buscar-canal/buscar-canal.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'canales', component: CanalesComponent, data: {titulo: 'Canales'} },
            {path: 'canales/:id', component: CanalComponent, data: {titulo: 'Canal'}},
            {path: 'busqueda', component: BuscarCanalComponent}
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);