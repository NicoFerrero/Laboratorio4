import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent implements OnInit {
  @ViewChild('prueba', { static: false }) prueba: ElementRef<HTMLTableDataCellElement>;
  @Input() persona: Persona;

  constructor() {}

  ngOnInit() {}
}
