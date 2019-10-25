import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/auth/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {
    email: '',
    pass: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.usuarioService.loginUsuario(this.usuario).subscribe(data => {
      //console.log(data.token)
      if (data['token']) {
        localStorage.setItem('token', data['token']);
        this.router.navigate(['home']);
      }
    });
  }
}
