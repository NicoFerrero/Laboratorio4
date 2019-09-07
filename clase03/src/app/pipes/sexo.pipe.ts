import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
})
export class SexoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let respuesta = 'otro';
    if (value === 'f') {
      respuesta = 'femenino';
    } else if (value === 'm') {
      respuesta = 'masculino';
    }
    return respuesta;
  }
}
