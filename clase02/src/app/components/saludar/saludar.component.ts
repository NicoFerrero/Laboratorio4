import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  personas = [];

  constructor() { }

  ngOnInit() {
  }

  onCargar(persona) {
    this.personas.push(persona);
  }
}
