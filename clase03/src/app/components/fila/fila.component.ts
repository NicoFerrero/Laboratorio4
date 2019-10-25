import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent implements OnInit {
  @Input() persona: Persona;

  constructor() {}

  ngOnInit() {}
}
