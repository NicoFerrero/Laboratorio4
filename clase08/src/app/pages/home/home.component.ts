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
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  onLogOut() {
    localStorage.removeItem('token');
  }

  onGetAutos() {
    this.usuarioService.getAutos().subscribe(data => {
      console.log(data);
    });
  }

  onRegistro() {
    this.usuarioService.registroAuto(this.auto).subscribe(data => {
      console.log(data);
    });
  }
}
