import { Persona } from './../../clases/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() cargar = new EventEmitter<any>();
  @Input() estado: any;

  persona: Persona = new Persona('', '');

  constructor() { }

  ngOnInit() {
  }

  enviar(persona: any, event) {
    event.preventDefault();
    this.cargar.emit(new Persona(this.persona.nombre, this.persona.email)); // ESTO SE HACE PARA QUE NO QUEDEN TODOS REFERENCIADOS A LO MISMO, EXTRAE LAS PROPIEDADES Y CREA OTRO OBJETO
    this.persona.nombre = '';
    this.persona.email = '';
  }
}
