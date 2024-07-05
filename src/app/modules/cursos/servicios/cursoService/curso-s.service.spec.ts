import { TestBed } from '@angular/core/testing';

import { CursoSService } from './curso-s.service';

describe('CursoSService', () => {
  let service: CursoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
