import { TestBed, async, inject } from '@angular/core/testing';

import { NotLoggedGuardGuard } from './not-logged-guard.guard';

describe('NotLoggedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotLoggedGuardGuard]
    });
  });

  it('should ...', inject([NotLoggedGuardGuard], (guard: NotLoggedGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
