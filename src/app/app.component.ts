import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nom = 'Yaye Fall Dev';
  ok = false;
  textbtn = 'Activer' ;

  // tslint:disable-next-line:typedef
  onclick() {
    this.ok = !this.ok;
    this.textbtn = this.ok ? 'Activer' : 'desactiver' ;
  }
}
