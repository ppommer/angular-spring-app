import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";



/**
 * CanActivate:
 * Interface that can be implemented by a class to be a guard
 * If all guards return true, navigation continues
 * If all guards return false, navigation cancels
 */

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
