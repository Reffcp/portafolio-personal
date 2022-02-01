import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  constructor(private http: HttpClient) {}

  public getExperiencia(tipo: string) {
    return this.http.get('../../../../assets/data/' + tipo + '.json');
  }
}
