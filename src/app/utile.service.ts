import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  constructor() { }
  // tslint:disable-next-line:typedef
  numberSeparator(nbr: number, sep: string)
  {
    let nombre: string = nbr.toString();
    // tslint:disable-next-line:prefer-const
    let reg = /(\d+)(\d{3})/;
    while (reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' + sep + '$2');
    }
    return nombre;
  }
}
