import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.scss']
})
export class AddBienComponent implements OnInit {

  // @ts-ignore
  bienForm: FormGroup;
  options: string[] = ['location', 'vente'];
  constructor() { }
  ngOnInit(): void {
    // creer le formulailre
    this.bienForm = new FormGroup({
      title : new FormControl(null,
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)]
      ),
      price: new FormControl(null,
        [
          Validators.required,
          Validators.min(1000)
        ]
      ),
      description: new FormControl(null),
      categorie: new FormControl(null), // select
      image: new FormControl(null),
      sale: new FormControl('location'), // radio
      imageSecondaire: new FormArray([]), // on genere dinamiquement un champ
    });
  }
  // tslint:disable-next-line:typedef
  getImagesSecControls(){
    // @ts-ignore
    return (this.bienForm.get('imageSecondaire')).controls;
  }

// tslint:disable-next-line:typedef
onAddSecImage(){
const control =  new FormControl(null, Validators.required);
(this.bienForm.get('imageSecondaire') as FormArray).push(control);
}

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.bienForm);
  }
}
