import { TestBed } from '@angular/core/testing';

import { UserLoggedInGaurdService } from './user-loggedIn-gaurd.service';

describe('UserLoggedInGaurdServiceGuard', () => {
  let guard: UserLoggedInGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLoggedInGaurdService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
