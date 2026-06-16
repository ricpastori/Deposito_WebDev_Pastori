import { inject } from '@angular/core';
import { AuthExerciseService } from './../services/auth-exercise-service';
import { CanActivateFn, Router } from '@angular/router';

export const authExerciseGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthExerciseService)
  const router = inject(Router)

  return authService.isLoggedIn() ? true : router.createUrlTree(["/login2"])
};
