import { TestBed } from '@angular/core/testing';

import { UsersLoginGuard } from './users-login.guard';

describe('UsersLoginGuard', () => {
  let guard: UsersLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
