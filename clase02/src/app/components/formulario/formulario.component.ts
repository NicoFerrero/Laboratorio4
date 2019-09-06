import { Persona } from './../../clases/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() cargar = new EventEmitter<any>();
  @Input() estado: any;

  persona: any = {
    nombre: '',
    email: '',
  };

  constructor() {}

  ngOnInit() {}

  enviar(persona: any, event: Event) {
    event.preventDefault();
    /* ESTO SE HACE PARA QUE NO QUEDEN TODOS REFERENCIADOS A LO MISMO, EXTRAE LAS PROPIEDADES Y CREA OTRO OBJETO
    this.cargar.emit({...persona})*/
    this.cargar.emit(new Persona(this.persona.nombre, this.persona.email));
    this.persona.nombre = '';
    this.persona.email = '';
  }
}
