import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/auth/usuario.service';
import { Auto } from 'src/app/models/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  auto: Auto = {
    marca: '',
    modelo: '',
    anio: '',
    foto: '',
  };

  autos: Auto[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.onGetAutos();
  }

  onLogOut() {
    localStorage.removeItem('token');
  }

  onGetAutos() {
    this.usuarioService.getAutos().subscribe(data => {
      console.log(data);
      this.autos = data['rta'];
    });
  }

  onRegistro() {
    let path = 'autos/' + this.auto.modelo + '_' + this.auto.marca;
    this.usuarioService.traerArchivo(path).subscribe(data => {
      this.auto.foto = data;
      this.usuarioService.registroAuto(this.auto).subscribe(data => {
        console.log(data);
        this.onGetAutos();
        this.auto = { marca: '', modelo: '', anio: '', foto: '' };
      });
    });
  }

  subirArchivo(event) {
    let path = 'autos/' + this.auto.modelo + '_' + this.auto.marca;
    this.usuarioService.subirArchivo(event.target.files[0], path).then(data => {
      console.log('exito');
    });
  }
}
