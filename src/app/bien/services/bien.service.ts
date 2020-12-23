import { Injectable } from '@angular/core';
import {Bien} from '../bien.modele';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  biens: Bien[] = [
    {
      id: 1 ,
      title: 'maison',
      description: 'soupe candian mafe',
      price: 123000 ,
      image: 'https://source.unsplash.com/1080x720/?class',
      categorie: 'abcnvnb',
      sale: true,
      state: 1,
      creatAt: new Date(2019, 4, 3, 12, 30)
    },
    {
      id: 2,
      title: 'voiture',
      description: 'soupe candian yassa',
      price: 600000 ,
      state: 1,
      image: 'https://source.unsplash.com/1080x720/?bus',
      categorie: 'abcnvnb',
      sale: true,
      creatAt: new Date(2018, 4, 3, 12, 30),
    },
    {
      id: 3,
      title: 'belle dame',
      description: 'soupe candian mafe',
      price: 400000 ,
      state: 1,
      image: 'https://source.unsplash.com/1080x720/?girl',
      categorie: 'abcnvnb',
      sale: true,
      creatAt: new Date(2020, 4, 3, 12, 30),
    },
    {
      id: 4,
      title: 'femme exemplaire',
      description: 'soupe candian mbakhal',
      price: 300000 ,
      state: 1,
      image: 'https://source.unsplash.com/1080x720/?girl',
      categorie: 'abcnvnb',
      sale: true,
      creatAt: new Date(2017, 4, 3, 12, 30),
    },
    {
      id: 5,
      title: 'trouver du travail',
      description: 'soupe candian mafe',
      price: 500000 ,
      state: 1,
      image: 'https://source.unsplash.com/1080x720/?sport',
      categorie: 'abcnvnb',
      sale: true,
      creatAt: new Date(2016, 4, 3, 12, 30),
    },
    {
      id: 6,
      title: 'acheter voiture',
      description: 'soupe candian domada',
      price: 900000 ,
      state: 1,
      image: 'https://source.unsplash.com/1080x720/?start',
      categorie: 'abcnvnb',
      sale: true,
      creatAt: new Date(2015, 4, 3, 12, 30),
    }
  ];
  constructor() { }
  getAllBien(): Bien[]{
    return this.biens;
  }
  // tslint:disable-next-line:typedef
  getBienByid(id: number): any{
    return this.biens.find(
      (Mybien: Bien) => {
        return Mybien.id === id;
      });
  }
  // tslint:disable-next-line:typedef
  addBien(newBien: Bien){
    this.biens.push(newBien);
  }
  // tslint:disable-next-line:typedef
  UpdateBien(bienUpdated: Bien){
    let OldBien: Bien | undefined = this.biens.find((Mybien: Bien) => {
      return Mybien.id === bienUpdated.id;
    });
    if (OldBien){
      OldBien = {...bienUpdated};
    }
  }
  getLastid(): number{
    return this.biens[this.biens.length - 1] ?
      this.biens[this.biens.length - 1].id : 0;
  }
  getSimilaire(){

  }
}
