import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.scss']
})
export class ConexionComponent implements OnInit {
// @ts-ignore
  @ViewChild('loginForm') myform: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
/*onSubmit(form: HTMLFontElement){  lorsquon veut modifier dans le ts
console.log(form);
      }*/

  // tslint:disable-next-line:typedef
 /* onSubmit(form: NgForm){ cest quand on on veut recuperer les donnes
    console.log(form.value.username);
  }*/
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.myform.valid);
  }
}

