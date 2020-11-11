import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProfesoresService } from '../../services/profesores.service';

import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
    profesor: Profesor;

    constructor(private route: ActivatedRoute, private profesoresService: ProfesoresService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.profesoresService.getProfesor(params['profesor']).subscribe(p => {
                this.profesor = p;
            });
        });
    }
}
