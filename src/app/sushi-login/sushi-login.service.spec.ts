import { TestBed, inject } from '@angular/core/testing';

import { SushiLoginService } from './sushi-login.service';

describe('SushiLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SushiLoginService]
    });
  });

  it('should be created', inject([SushiLoginService], (service: SushiLoginService) => {
    expect(service).toBeTruthy();
  }));
});
