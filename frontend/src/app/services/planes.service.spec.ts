import { TestBed } from '@angular/core/testing';

import { planesService } from './planes.service';

describe('planesService', () => {
  let service: planesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(planesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
