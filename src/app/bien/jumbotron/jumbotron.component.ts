import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor( private  authservice: AuthService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  Onlogin(email = '@ndiaye', password = 'password'){
    this.authservice.login(email, password);

  }
// tslint:disable-next-line:typedef
Onlogout(){
  this.authservice.logout();
}
}
