import { TestBed } from '@angular/core/testing';

import { ProyectosService } from './proyectos.service';

describe('ProyectosService', () => {
  // tslint:disable-next-line: prefer-const
  let service: ProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
