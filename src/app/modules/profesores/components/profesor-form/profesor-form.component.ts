import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfesoresService } from '../../services/profesores.service';

import { Profesor } from '../../models/profesor.model';


@Component({
  selector: 'profesor-form',
  templateUrl: './profesor-form.component.html',
  styleUrls: ['./profesor-form.component.css']
})
export class ProfesorFormComponent implements OnInit {
    profesorForm: FormGroup;
    profesor: Profesor;


    constructor(private router: Router, private formBuilder: FormBuilder, private profesoresService: ProfesoresService) {
        this.profesorForm = this.formBuilder.group({
            noEmpleado: ['', Validators.required],
            nombre: ['', Validators.required],
            carrera: ['', Validators.required],
            telefono: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.profesor = new Profesor();
    }

    create() {
        this.profesoresService.createProfesor(this.profesorForm.value).subscribe(p => {
            this.router.navigateByUrl('/');
        });
    }

}
