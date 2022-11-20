import { TestBed } from '@angular/core/testing';

import { ReceptionGuard } from './reception.guard';

describe('ReceptionGuard', () => {
  let guard: ReceptionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReceptionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
