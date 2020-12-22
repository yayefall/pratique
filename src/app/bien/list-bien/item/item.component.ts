import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../bien.modele';
import {UtileService} from '../../../utile.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 // @ts-ignore
  @Input() Mybien: Bien;
  // @ts-ignore
 /* @Input() id ;
  // @ts-ignore
  @Input() title ;
  // @ts-ignore
  @Input() description;
  // @ts-ignore
  @Input() state;
  // @ts-ignore
  @Input() price ;
  // @ts-ignore
  @Input() image ;
  // @ts-ignore
  @Input() sale ;
  // @ts-ignore
  @Input() creatAt ;*/
  constructor(private utileService: UtileService) { }

  ngOnInit(): void {
  }
}
