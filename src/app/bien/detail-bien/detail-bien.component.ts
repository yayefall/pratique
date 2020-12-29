import {Component, OnDestroy, OnInit} from '@angular/core';
import {Bien} from '../bien.modele';
import {BienService} from '../services/bien.service';
import {ActivatedRoute, Data, Router} from '@angular/router';

// tslint:disable-next-line:class-name
class params {
}

// @ts-ignore
@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit, OnDestroy {
  // @ts-ignore
  bien: Bien;
  constructor(private  route: ActivatedRoute,
              private bienservice: BienService,
              ) {console.log('the constructeur'); }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.bien = data.bien;
      }
    );
    // @ts-ignore
   /* const idBien = +this.router.snapshot.params.id;
   // console.log(idBien);
    this.bien = this.bienservice.getBienByid(idBien);
    // for next time that this component wil be load
    this.router.params
      .subscribe(
        (p: params) => {
         // const idBien = +p.id ;
          this.bien = this.bienservice.getBienByid(idBien);
        }
      );*/
  }
  // tslint:disable-next-line:typedef
  ngOnDestroy() {}

}
