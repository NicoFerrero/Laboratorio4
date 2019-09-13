import { Persona } from './../../clases/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() cargar = new EventEmitter<any>();
  @Output() cambiarEstado = new EventEmitter<any>();
  @Input() estado: any;

  persona: Persona = {
    nombre: '',
    email: '',
    sexo: '',
    sueldo: 0,
    edad: 0,
    licencia: '',
    fecha: ''
  };

  constructor() { }

  ngOnInit() {
  }

  enviar(persona: any, event: Event) {
    event.preventDefault();
    // tslint:disable-next-line: max-line-length
    this.cargar.emit(new Persona(this.persona.nombre, this.persona.email, this.persona.sexo, this.persona.sueldo, this.persona.edad, this.persona.licencia, this.persona.fecha));
    this.persona.nombre = '';
    this.persona.email = '';
    this.persona.sexo = '';
    this.persona.sueldo = 0;
    this.persona.edad = 0;
    this.persona.licencia = '';
    this.persona.fecha = '';
  }

  toggleEstado(estado) {
    this.cambiarEstado.emit(estado);
  }
}
