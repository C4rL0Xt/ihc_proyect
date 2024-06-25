import { TestBed } from '@angular/core/testing';

import { ServicioProfesorService } from './servicio-profesor.service';

describe('ServicioProfesorService', () => {
  let service: ServicioProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
