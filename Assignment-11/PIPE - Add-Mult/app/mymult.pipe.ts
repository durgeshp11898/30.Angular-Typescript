import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform {

  transform(num1: number, num2: number): number {
    return num1 * num2;
  }

}
