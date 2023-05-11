import { TestBed } from '@angular/core/testing';

import { PoetApiService } from './poet-api.service';

describe('PoetApiService', () => {
  let service: PoetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
