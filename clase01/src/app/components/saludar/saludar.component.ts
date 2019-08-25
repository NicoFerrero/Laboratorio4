import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css'],
})
export class SaludarComponent implements OnInit {
  name = 'pepe';
  src =
    'https://as.com/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg';
  persona = {
    nombre: '',
    email: '',
  };
  email = '';
  nombre = '';
  enviado = true;

  constructor() {}

  ngOnInit() {}

  manejadora(event) {
    event.preventDefault();
    this.nombre = this.persona.nombre;
    this.email = this.persona.email;
    this.enviado = !this.enviado;
  }

  cargar() {
    this.enviado = !this.enviado;
    this.persona.nombre = '';
    this.persona.email = '';
  }
}
