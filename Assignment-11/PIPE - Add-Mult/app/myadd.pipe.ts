import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(num1: number, num2: number): number {
    return num1 + num2;
  }

}
