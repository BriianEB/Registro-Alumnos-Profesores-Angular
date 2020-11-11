import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

import { AlumnosService } from './services/alumnos.service';

@NgModule({
  declarations: [
      AlumnosComponent,
      AlumnoFormComponent,
      AlumnoComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
      AlumnosComponent
  ],
  providers: [
      AlumnosService
  ]
})
export class AlumnosModule { }
