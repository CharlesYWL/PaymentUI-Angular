import { TestBed } from '@angular/core/testing';

import { ApiUtiService } from './api-uti.service';

describe('ApiUtiService', () => {
  let service: ApiUtiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUtiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
