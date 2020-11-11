import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
    api: string = 'https://localhost:5001';

    constructor(private http: HttpClient) {

    }

    getAlumnos() {
        return this.http.get<Array<Alumno>>(this.api + '/alumnos');
    }

    getAlumno(matricula: string) {
        return this.http.get<Alumno>(this.api + '/alumnos/' + matricula);
    }

    createAlumno(alumno: Alumno) {
        return this.http.post<Alumno>(this.api + '/alumnos/create', alumno);
    }
}
