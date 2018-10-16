import { TestBed, inject } from '@angular/core/testing';

import { GetCustomersService } from './get-customers.service';

describe('GetCustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCustomersService]
    });
  });

  it('should be created', inject([GetCustomersService], (service: GetCustomersService) => {
    expect(service).toBeTruthy();
  }));
});
