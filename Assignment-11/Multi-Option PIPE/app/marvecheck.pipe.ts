import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvecheck'
})
export class MarvecheckPipe implements PipeTransform {

  transform(value: number, type: string): string {
    switch (type) {
      case 'Prime':
        if (value <= 1) {
          return `${value} is not a prime number`;
        } else if (value === 2) {
          return `${value} is a prime number`;
        } else {
          for (let i = 2; i < value; i++) {
            if (value % i === 0) {
              return `${value} is not a prime number`;
            }
          }
          return `${value} is a prime number`;
        }
      case 'Perfect':
        let sum = 0;
        for (let i = 1; i < value; i++) {
          if (value % i === 0) {
            sum += i;
          }
        }
        if (sum === value) {
          return `${value} is a perfect number`;
        } else {
          return `${value} is not a perfect number`;
        }
      case 'Even':
        if (value % 2 === 0) {
          return `${value} is an even number`;
        } else {
          return `${value} is not an even number`;
        }
      case 'Odd':
        if (value % 2 !== 0) {
          return `${value} is an odd number`;
        } else {
          return `${value} is not an odd number`;
        }
      default:
        return `${value} is not a valid input`;
    }
  }
}