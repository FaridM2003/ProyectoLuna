import { TestBed } from '@angular/core/testing';

import { UserCreatorsService } from './user-creators.service';

describe('UserCreatorsService', () => {
  let service: UserCreatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCreatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
