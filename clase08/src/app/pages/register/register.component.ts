import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/auth/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    pass: '',
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
    });
  }

  onRegister() {
    this.usuarioService.registroUsuario(this.usuario).subscribe(data => {
      console.log(data);
    });
  }
}
