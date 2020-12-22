import { Pipe, PipeTransform } from '@angular/core';
import { UtileService} from '../utile.service';
import {transformAll} from '@angular/compiler/src/render3/r3_ast';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private utileService: UtileService) {
  }
  transform(value: number, sep: string): string {
    return this.utileService.numberSeparator(value, sep);
    // @ts-ignore
  }

}
// timeLeft : Date | timeLeft

