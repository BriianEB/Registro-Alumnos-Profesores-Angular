import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AlumnosService } from '../../services/alumnos.service';

import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
    alumno: Alumno;

    constructor(private route: ActivatedRoute, private alumnosService: AlumnosService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.alumnosService.getAlumno(params['alumno']).subscribe(a => {
                this.alumno = a;
            });
        });
    }

}
