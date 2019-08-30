import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  @Input() personas: Persona[];
  @Input() estado: any;
  @Output() cambiarEstado = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleEstado(estado) {
    this.cambiarEstado.emit(estado);
  }
}
