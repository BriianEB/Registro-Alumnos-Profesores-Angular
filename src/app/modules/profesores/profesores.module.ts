import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { ProfesorFormComponent } from './components/profesor-form/profesor-form.component';

import { ProfesoresService } from './services/profesores.service';


@NgModule({
  declarations: [
      ProfesoresComponent,
      ProfesorComponent,
      ProfesorFormComponent,
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
      ProfesoresComponent
  ],
  providers: [
      ProfesoresService
  ]
})
export class ProfesoresModule { }
