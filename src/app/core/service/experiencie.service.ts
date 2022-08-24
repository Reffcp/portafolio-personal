import { Injectable } from '@angular/core';
import { collectionData, collection, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperiencieService {
  constructor(private firestore: Firestore) {}

  getExperienceByFilter(filter: string): Observable<any> {
    const collect = collection(this.firestore, 'experiencia-profesional');
    return collectionData(collect);
  }
}
