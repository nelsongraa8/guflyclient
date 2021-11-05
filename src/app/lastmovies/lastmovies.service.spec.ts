import { TestBed } from '@angular/core/testing';

import { LastmoviesService } from './lastmovies.service';

describe('LastmoviesService', () => {
  let service: LastmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
