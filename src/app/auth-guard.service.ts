import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authservice: AuthService,
              private router: Router) {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return  this.canActivate(childRoute, state);
    }
  // tslint:disable-next-line:typedef
// tslint:disable-next-line:max-line-length
  // @ts-ignore
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    // @ts-ignore
    this.authservice.isAuthenticated().then(
      (authenticated: boolean ) => {
        if (authenticated){
          return true;
        }else {
          this.router.navigate(['/']);
          return  false;
        }
      }
    );
  }
}
