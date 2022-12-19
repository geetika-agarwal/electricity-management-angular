import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDisplay'
})
export class DateDisplayPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    var date = new Date(value);
    var str = date.toLocaleDateString();
    return str;
  }

}
