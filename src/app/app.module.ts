import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// Componentes
import { AppComponent } from './app.component';
import { CanalesComponent } from './pages/canales/canales.component';
import { CanalService } from './services/canal.service';
import { CanalComponent } from './pages/canales/canal.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PAGES_ROUTES } from './pages/pages-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { BuscarCanalComponent } from './pages/buscar-canal/buscar-canal.component';
import { AddcanalComponent } from './pages/canales/addcanal/addcanal.component';
import { EditcanalComponent } from './pages/canales/editcanal/editcanal.component';
import { AdminComponent } from './pages/admin/admin.component';

// Zonales
import { ValdiviaComponent } from './pages/canales/zonal/valdivia/valdivia.component';
import { OsornoComponent } from './pages/canales/zonal/osorno/osorno.component';
import { ChiloeComponent } from './pages/canales/zonal/chiloe/chiloe.component';
import { PtomonttComponent } from './pages/canales/zonal/ptomontt/ptomontt.component';
import { CoyhaiqueComponent } from './pages/canales/zonal/coyhaique/coyhaique.component';
import { SantiagoComponent } from './pages/canales/zonal/santiago/santiago.component';
import { TemucoComponent } from './pages/canales/zonal/temuco/temuco.component';
import { ConcepcionComponent } from './pages/canales/zonal/concepcion/concepcion.component';

//Servicios
import { UsuarioService } from './services/usuario.service';
import { SidebarService } from './services/sidebar.service';
import { LoginGuardGuard } from './services/login-guard.guard';
import { FooterComponent } from './pages/footer/footer.component';
import { UsersComponent } from './pages/users/users.component';
import { ImagesComponent } from './pages/images/images.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UploadImageService } from './services/upload-image.service';
import { ArchivosComponent } from './pages/archivos/archivos.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FileUploadModule} from 'primeng/fileupload';
import { ImagenPipe } from './pipes/imagen.pipe';
import {GalleriaModule} from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    CanalesComponent,
    CanalComponent,
    LoginComponent,
    PagesComponent,
    HeaderComponent,
    BuscarCanalComponent,
    ValdiviaComponent,
    OsornoComponent,
    ChiloeComponent,
    PtomonttComponent,
    CoyhaiqueComponent,
    AddcanalComponent,
    EditcanalComponent,
    AdminComponent,
    SantiagoComponent,
    TemucoComponent,
    ConcepcionComponent,
    FooterComponent,
    UsersComponent,
    ImagesComponent,
    ArchivosComponent,
    ImagenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NgbModule,
    FileUploadModule,
    GalleriaModule,
    PAGES_ROUTES
  ],
  providers: [CanalService, UsuarioService, SidebarService, LoginGuardGuard, AdminGuardGuard, UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
