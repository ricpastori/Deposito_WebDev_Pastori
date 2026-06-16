import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const adminGuard: CanActivateChildFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.getRole() === 'admin' ? true: router.createUrlTree(["/home"])
};
