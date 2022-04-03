import { TestBed } from '@angular/core/testing';

import { UsersApiService } from './usersAPI.service';

describe('LoginService', () => {
  let service: UsersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
