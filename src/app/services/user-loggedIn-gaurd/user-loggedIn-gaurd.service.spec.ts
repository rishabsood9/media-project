import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UserLoggedInGaurdService } from './user-loggedIn-gaurd.service';

describe('UserLoggedInGaurdServiceGuard', () => {
  let guard: UserLoggedInGaurdService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: () => {} } },
      ],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLoggedInGaurdService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
