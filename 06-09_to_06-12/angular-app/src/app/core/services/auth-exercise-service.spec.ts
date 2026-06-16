import { TestBed } from '@angular/core/testing';

import { AuthExerciseService } from './auth-exercise-service';

describe('AuthExercise', () => {
  let service: AuthExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
