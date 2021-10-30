import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedInGaurdService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      alert('Kindly login or signup to access gallery!!');
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
      return false;
    }
  }
}
