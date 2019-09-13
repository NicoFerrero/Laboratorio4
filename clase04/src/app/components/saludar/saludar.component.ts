import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  personas: Persona[] = new Array<Persona>();
  estado = true;

  constructor() {}

  ngOnInit() {
  }

  onCargar(persona) {
    this.personas.push(persona);
    this.estado = !this.estado;
  }

  onCambiarEstado(estado) {
    this.estado = !estado;
  }
}
