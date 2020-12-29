import { Injectable } from '@angular/core';
import {UserService} from './user.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  // @ts-ignore
  connectedUser: User ;
  constructor( private  userservice: UserService) { }
  // tslint:disable-next-line:typedef
  isAuthenticated(): Promise <boolean> {
const promise = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve(this.loggedIn);
    }, 1000);
  }
 );
// @ts-ignore
return promise;
  }
  // tslint:disable-next-line:typedef
  login(email: string, password: string ){
   this.connectedUser = this.userservice.getUserByEmailPassword(email, password);
    if (this.connectedUser ){
      this.loggedIn = true ;
    }else {
      this.loggedIn = false;
    }
    // this.logg

  }
  // tslint:disable-next-line:typedef
  logout(){
    this.loggedIn = false;
    this.connectedUser = null;
    console.log(this.loggedIn);
  }
}
