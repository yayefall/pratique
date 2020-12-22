import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})
export class SummarizePipe implements PipeTransform {

  // @ts-ignore
  transform(value: string, limit: number): string {
    // @ts-ignore
    // @ts-ignore
    if (value.length > limit){
      return value.substr(0, limit) + '...' ;
    }
    return value;
  }

}
