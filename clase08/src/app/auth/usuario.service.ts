import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from '../models/usuario';
import { HttpHeaders } from '@angular/common/http';
import { Auto } from '../models/auto';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'http://127.0.0.1:3003';
  helper = new JwtHelperService();
  constructor(private http: HttpClient, private fbStorage: AngularFireStorage) {}

  registroUsuario(usuario: Usuario) {
    return this.http.post(`${this.url}/clientes`, { cliente: { ...usuario } });
  }

  getUsuarios() {
    return this.http.get(`${this.url}/clientes`);
  }

  loginUsuario(usuario: Usuario) {
    return this.http.post(`${this.url}/login`, { cliente: { ...usuario } });
  }

  isAutenticated() {
    let rta = false;
    if (localStorage.getItem('token') !== '') {
      const token = localStorage.getItem('token') as string;
      if (!this.helper.isTokenExpired(token)) {
        rta = true;
      }
    }
    return rta;
  }

  getAutos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      }),
    };
    return this.http.get(`${this.url}/auto`, httpOptions);
  }

  registroAuto(auto: Auto) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      }),
    };
    return this.http.post(`${this.url}/auto`, { auto: { ...auto } }, httpOptions);
  }

  subirArchivo(file: any, path: string) {
    return this.fbStorage.upload(path, file);
  }

  traerArchivo(path: string) {
    return this.fbStorage.ref(path).getDownloadURL();
  }
}
