import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoComponent } from './components/alumno/alumno.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';

const routes: Routes = [
    {
        path: 'alumnos/registrar',
        component: AlumnoFormComponent
    },
    {
        path: 'alumnos/:alumno',
        component: AlumnoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
