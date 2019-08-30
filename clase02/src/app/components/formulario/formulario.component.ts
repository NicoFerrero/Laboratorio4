import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() cargar = new EventEmitter<any>();

  persona: any = {
    nombre: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  enviar(persona: any) {
    this.cargar.emit(persona);
  }
}
