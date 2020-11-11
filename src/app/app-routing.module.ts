import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'color',
        component: ColorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
