import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlumnosService } from '../../services/alumnos.service';

import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {
    alumnoForm: FormGroup;
    alumno: Alumno;


    constructor(private router: Router, private formBuilder: FormBuilder, private alumnosService: AlumnosService) {
        this.alumnoForm = this.formBuilder.group({
            matricula: ['', Validators.required],
            nombre: ['', Validators.required],
            carrera: ['', Validators.required],
            email: ['', Validators.required],
            telefono: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.alumno = new Alumno();
    }

    create() {
        this.alumnosService.createAlumno(this.alumnoForm.value).subscribe(a => {
            this.router.navigateByUrl('/');
        });
    }

}
