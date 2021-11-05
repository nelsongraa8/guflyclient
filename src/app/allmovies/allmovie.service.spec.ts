import { TestBed } from '@angular/core/testing';

import { AllmovieService } from './allmovie.service';

describe('AllmovieService', () => {
  let service: AllmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
