import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clase10';
  entidad = { nombre: '', apellido: '', correo: '', dni: '' };
  mostrar: boolean = false;
  data: string = '';
  disabled: boolean = true;

  verificar(event) {
    console.log(event);
    if (event !== null) {
      this.disabled = false;
    } else {
      console.log('Ya no es valido');
      this.disabled = true;
    }
  }

  entrar() {
    if (
      this.entidad.nombre == '' ||
      this.entidad.apellido == '' ||
      this.entidad.correo == '' ||
      this.entidad.dni == ''
    ) {
      alert('complete todfos los campos');
    } else {
      this.mostrar = true;
    }
  }
}
