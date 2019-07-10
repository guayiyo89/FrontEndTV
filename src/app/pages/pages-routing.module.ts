import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CanalesComponent } from './canales/canales.component';
import { CanalComponent } from './canales/canal.component';
import { BuscarCanalComponent } from './buscar-canal/buscar-canal.component';
import { AddcanalComponent } from './canales/addcanal/addcanal.component';
import { EditcanalComponent } from './canales/editcanal/editcanal.component';
import { AdminComponent } from './admin/admin.component';
import { LoginGuardGuard } from '../services/login-guard.guard';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { AdminGuardGuard } from '../services/admin-guard.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            {path: 'canales', component: CanalesComponent, data: {titulo: 'Canales'}, canActivate: [LoginGuardGuard] },
            {path: 'canales/:id', component: CanalComponent, data: {titulo: 'Canal'}, canActivate: [LoginGuardGuard] },
            {path: 'busqueda', component: BuscarCanalComponent, canActivate: [LoginGuardGuard]},
            {path: 'newcanal', component: AddcanalComponent, canActivate: [LoginGuardGuard]},
            {path: 'canal', component: EditcanalComponent, canActivate: [LoginGuardGuard]},
            {path: 'admin', component: AdminComponent, canActivate: [AdminGuardGuard]},
            {path: 'usuarios', component: UsersComponent, canActivate: [AdminGuardGuard]},
            {path: 'images', component: ImagesComponent, canActivate: [AdminGuardGuard]},
            {path: '', redirectTo: 'canales', pathMatch: 'full'}
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);