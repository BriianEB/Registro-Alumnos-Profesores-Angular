import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../services/alumnos.service';

import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
    alumnos: Alumno[];
    numAlumnos: number;

    constructor(private alumnosService: AlumnosService) {

    }

    ngOnInit(): void {
        this.alumnosService.getAlumnos().subscribe(a => {
            this.alumnos = a;
            this.numAlumnos = this.alumnos.length;
        });
    }

}
