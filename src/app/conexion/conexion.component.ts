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
  // quand on fait set value tous les champs doivent initialiser
  // quand on fait  patch value on a pas besoin detre intialiser
  constructor() { }

  ngOnInit(): void {
    console.log(this.myform);

    const myEmail = 'niangfatou@exemple.com';
    this.myform.setValue({
      username: myEmail,
      password: 'password'
    });
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
    console.log(this.myform.value);
  }
}

