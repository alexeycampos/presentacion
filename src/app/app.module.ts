import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

import { FotoComponent } from './foto/foto.component';
import { LinkComponent } from './link/link.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    FotoComponent,
    LinkComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
