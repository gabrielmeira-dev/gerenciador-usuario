import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getByIdResolver } from './get-by-id-resolver';

describe('getByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getByIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
