import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorComponent } from './components/profesor/profesor.component';
import { ProfesorFormComponent } from './components/profesor-form/profesor-form.component';


const routes: Routes = [
    {
        path: 'profesores/registrar',
        component: ProfesorFormComponent
    },
    {
        path: 'profesores/:profesor',
        component: ProfesorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
