import { TestBed, inject } from '@angular/core/testing';

import { PhotoListResolve } from './photo-list.resolve';

describe('PhotoList.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoListResolve]
    });
  });

  it('should be created', inject([PhotoListResolve], (service: PhotoListResolve) => {
    expect(service).toBeTruthy();
  }));
});
