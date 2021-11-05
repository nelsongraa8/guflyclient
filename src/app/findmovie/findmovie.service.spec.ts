import { TestBed } from '@angular/core/testing';

import { FindmovieService } from './findmovie.service';

describe('FindmovieService', () => {
  let service: FindmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
