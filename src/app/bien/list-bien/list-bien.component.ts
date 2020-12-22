import { Component, OnInit } from '@angular/core';
import {Bien} from '../bien.modele';
import {BienService} from '../services/bien.service';


@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.scss']
})
export class ListBienComponent implements OnInit {
  search = '';
  // @ts-ignore
  biens: Bien[];
  x: number[] = [1.0];
  constructor(private  bienservice: BienService) {
  }

  ngOnInit(): void {
    this.biens = this.bienservice.getAllBien();
  }

}
