import { TestBed } from '@angular/core/testing';

import { AuthchildrenGuard } from './authchildren.guard';

describe('AuthchildrenGuard', () => {
  let guard: AuthchildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthchildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
