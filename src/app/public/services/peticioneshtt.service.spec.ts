import { TestBed } from '@angular/core/testing';

import { PeticioneshttService } from './peticioneshtt.service';

describe('PeticioneshttService', () => {
  let service: PeticioneshttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticioneshttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
