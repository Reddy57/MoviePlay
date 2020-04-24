import { TestBed } from '@angular/core/testing';

import { MovieShopSignalRService } from './movie-shop-signal-r.service';

describe('MovieShopSignalRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieShopSignalRService = TestBed.get(MovieShopSignalRService);
    expect(service).toBeTruthy();
  });
});
