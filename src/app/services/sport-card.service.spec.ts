import { TestBed } from '@angular/core/testing';

import { SportCardService } from './sport-card.service';

describe('SportCardService', () => {
  let service: SportCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
