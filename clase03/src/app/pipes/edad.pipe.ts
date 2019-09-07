import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
})
export class EdadPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${value} años`;
  }
}
