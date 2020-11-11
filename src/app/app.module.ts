import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { ProfesoresModule } from './modules/profesores/profesores.module';

import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule,
    ProfesoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
