import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  public getProjects() {
    return this.http.get('../../../../assets/data/proyectos.json');
  }
}
