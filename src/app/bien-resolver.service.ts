import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Bien} from './bien/bien.modele';
import {BienService} from './bien/services/bien.service';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<Bien>{

  constructor(private  bienservice: BienService) { }
  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien
  {
    // tslint:disable-next-line:no-bitwise
     return this.bienservice.getBienByid(+route.params.id);
    }
}
