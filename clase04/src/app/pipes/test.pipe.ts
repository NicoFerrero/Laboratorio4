import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (value === 'si') {
      args.style.backgroundColor = 'red';
    } else {
      args.style.backgroundColor = 'green';
    }
    return value;
  }
}
