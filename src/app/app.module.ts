import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

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

// Zonales
import { ValdiviaComponent } from './pages/canales/zonal/valdivia/valdivia.component';
import { OsornoComponent } from './pages/canales/zonal/osorno/osorno.component';
import { ChiloeComponent } from './pages/canales/zonal/chiloe/chiloe.component';
import { PtomonttComponent } from './pages/canales/zonal/ptomontt/ptomontt.component';
import { CoyhaiqueComponent } from './pages/canales/zonal/coyhaique/coyhaique.component';
import { UsuarioService } from './services/usuario.service';
import { SidebarService } from './services/sidebar.service';

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
    CoyhaiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    PAGES_ROUTES
  ],
  providers: [CanalService, UsuarioService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
