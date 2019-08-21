import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagScrollComponent } from './imag-scroll/imag-scroll.component';
import { ServicioService} from './servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { Productos1Component } from './productos1/productos1.component';

import { CestaComponent } from './cesta/cesta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagScrollComponent,
    Productos1Component,
    
    CestaComponent

  ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],

  providers: [ServicioService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
