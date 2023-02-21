import { TestBed } from '@angular/core/testing';

import { AahexService } from './aahex.service';

describe('AahexService', () => {
  let service: AahexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AahexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
