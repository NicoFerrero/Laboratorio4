import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './../../servicios/mi-servicio.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css'],
})
export class ListadoPaisesComponent implements OnInit {
  paises: Array<any>;
  paisesFiltrados;
  displayedColumns: string[] = ['name', 'capital', 'region', 'flag'];

  constructor(private service: MiServicioService) {}

  ngOnInit() {
    this.service.getPaises().subscribe((data: Array<any>) => {
      this.paises = data;
      this.paisesFiltrados = new MatTableDataSource(data);
      this.paisesFiltrados.filterPredicate = (data: any, filter: string) =>
        data.name
          .trim()
          .toLowerCase()
          .indexOf(filter) !== -1;
    });
  }

  Filtrar(filtro) {
    // Normalmente es filtro.target.value pero por ser elemento de matrial es filtro.value
    if (filtro.value === 'All') {
      this.paisesFiltrados = this.paises;
    } else {
      this.paisesFiltrados = this.paises.filter(pais => pais.region === filtro.value);
    }
  }

  applyFilter(filterValue: string) {
    this.paisesFiltrados.filter = filterValue.trim().toLowerCase();
  }
}
