import { Component, OnInit } from '@angular/core';

import { ProfesoresService } from '../../services/profesores.service';

import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
    profesores: Profesor[];
    numProfesores: number;

    constructor(private profesoresService: ProfesoresService) {

    }

    ngOnInit(): void {
        this.profesoresService.getProfesores().subscribe(p => {
            this.profesores = p;
            this.numProfesores = this.profesores.length;
        });
    }

}
