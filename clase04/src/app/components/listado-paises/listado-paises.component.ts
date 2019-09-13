import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './../../servicios/mi-servicio.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  paises: Array<any>;
  paisesFiltrados: Array<any>;

  constructor(private service: MiServicioService) {
    this.service.getPaises().subscribe((data: Array<any>) => {
      this.paises = data;
      this.paisesFiltrados = data;
    });
  }

  ngOnInit() {
  }

  Filtrar(filtro) {
    if (filtro.target.value === 'All') {
        this.paisesFiltrados = this.paises;
    } else {
        this.paisesFiltrados = this.paises.filter(pais => pais.region === filtro.target.value);
    }
  }
}
