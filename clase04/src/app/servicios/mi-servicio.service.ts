import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  private paises;
  constructor(private http: HttpClient) { }

  getPaises() {
    this.paises = this.http.get('https://restcountries.eu/rest/v2/all');
    // se puede decir el tipo de dato que devuelve la peticion por ejemplo:
    // this.paises = this.http.get<tipoDato>('https://restcountries.eu/rest/v2/all');
    return this.paises;
  }
}
