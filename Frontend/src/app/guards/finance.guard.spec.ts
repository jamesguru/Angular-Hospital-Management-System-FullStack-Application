import { TestBed } from '@angular/core/testing';

import { FinanceGuard } from './finance.guard';

describe('FinanceGuard', () => {
  let guard: FinanceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FinanceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
