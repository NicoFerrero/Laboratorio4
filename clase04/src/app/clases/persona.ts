export class Persona {
  nombre: string;
  email: string;
  sexo: string;
  sueldo: number;
  edad: number;
  licencia: string;
  fecha: string;

  constructor(nombre, email, sexo, sueldo, edad, licencia, fecha) {
    this.nombre = nombre;
    this.email = email;
    this.sexo = sexo;
    this.sueldo = sueldo;
    this.edad = edad;
    this.licencia = licencia;
    this.fecha = fecha;
  }
}
