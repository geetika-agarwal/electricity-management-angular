import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountDisplay'
})
export class AmountDisplayPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(2);
  }

}
