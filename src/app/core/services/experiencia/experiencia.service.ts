import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  constructor(private http: HttpClient) {}

  public getExperiencia() {
    return this.http.get('../../../../assets/data/formal.json');
  }

  public getAsesorias() {
    return this.http.get('../../../../assets/data/asesorias.json');
  }
}
