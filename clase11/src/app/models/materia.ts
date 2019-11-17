export class Materia {
  materia?: string;
  cuatrimestre?: number;
  cupos?: number;
  alumnos?: number;
  profesor?: string;

  constructor(
    materia?: string,
    cuatrimestre?: number,
    cupos?: number,
    alumnos?: number,
    profesor?: string,
  ) {
    this.materia = materia ? materia : '';
    this.cuatrimestre = cuatrimestre ? cuatrimestre : 0;
    this.cupos = cupos ? cupos : 0;
    this.alumnos = alumnos ? alumnos : 0;
    this.profesor = profesor ? profesor : '';
  }
}
