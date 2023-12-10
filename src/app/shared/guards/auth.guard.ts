import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, _state) => {
  if (localStorage.getItem('email')) return true;
  else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
