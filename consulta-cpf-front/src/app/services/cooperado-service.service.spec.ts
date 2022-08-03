import { TestBed } from '@angular/core/testing';

import { CooperadoServiceService } from './cooperado-service.service';

describe('CooperadoServiceService', () => {
  let service: CooperadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
