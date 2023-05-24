import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

import { FotoComponent } from './foto/foto.component';
import { LinkComponent } from './link/link.component';


@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    FotoComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
