import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cupoPipe',
})
export class CupoPipePipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (value > 10 && value <= 20) {
      args.style.backgroundColor = 'red';
    } else if (value > 20) {
      args.style.backgroundColor = 'green';
    }
    return value;
  }
}
