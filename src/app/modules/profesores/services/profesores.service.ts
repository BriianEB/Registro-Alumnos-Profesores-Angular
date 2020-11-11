import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
    api: string = 'https://localhost:5001';

    constructor(private http: HttpClient) {

    }

    getProfesores() {
        return this.http.get<Array<Profesor>>(this.api + '/profesores');
    }

    getProfesor(profesor: string) {
        return this.http.get<Profesor>(this.api + '/profesores/' + profesor);
    }

    createProfesor(profesor: Profesor) {
        return this.http.post<Profesor>(this.api + '/profesores/create', profesor);
    }
}
