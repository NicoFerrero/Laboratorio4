import { TestBed } from '@angular/core/testing';

import { MiServicioService } from './mi-servicio.service';

describe('MiServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiServicioService = TestBed.get(MiServicioService);
    expect(service).toBeTruthy();
  });
});
