import { TestBed } from '@angular/core/testing';

import { ProfileCheckGuard } from './profile-check.guard';

describe('ProfileCheckGuard', () => {
  let guard: ProfileCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
