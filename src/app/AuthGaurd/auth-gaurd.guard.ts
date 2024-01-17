import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Redirecting to signin page if there is no user in the localStorage
  if (localStorage.getItem('user')) return true;
  else {
    router.navigateByUrl('/signin');
    return false;
  }
};
