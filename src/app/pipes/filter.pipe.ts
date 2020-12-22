import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // @ts-ignore
  transform(value: any, search: string, propName: string): any {
    // tslint:disable-next-line:triple-equals
    if (value.length === 0 || search.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value){
      // if (item[propName] === search){
       // if (item[propName]){}
         if (item[propName].includes(search)){
        resultArray.push(item);
      }
    }
    return  resultArray ;
  }

}
