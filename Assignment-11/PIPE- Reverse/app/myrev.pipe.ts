import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.split('').reverse().join('');
  }
  

}
