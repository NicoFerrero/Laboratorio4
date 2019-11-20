import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css'],
})
export class VerUsuariosComponent implements OnInit, OnChanges {
  @Input() ELEMENT_DATA;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['email', 'tipo'];
  usuariosFiltrados: MatTableDataSource<any> = new MatTableDataSource();
  constructor() {}

  ngOnInit() {
    this.usuariosFiltrados.data = this.ELEMENT_DATA;
    this.usuariosFiltrados.sort = this.sort;
    this.usuariosFiltrados.paginator = this.paginator;
    this.usuariosFiltrados.filterPredicate = (data: any, filter: string) =>
      data.name
        .trim()
        .toLowerCase()
        .indexOf(filter) !== -1;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.usuariosFiltrados.data = changes.ELEMENT_DATA.currentValue;
  }

  Filtrar(filtro) {
    // Normalmente es filtro.target.value pero por ser elemento de matrial es filtro.value
    if (filtro.value === 'All') {
      this.usuariosFiltrados.data = this.ELEMENT_DATA;
    } else {
      this.usuariosFiltrados.data = this.ELEMENT_DATA.filter(
        usuario => usuario.tipo === filtro.value,
      );
    }
  }

  getDataPDF(usuarios: any[]) {
    const body = [];
    for (let i = 0; i < usuarios.length; i++) {
      body.push([usuarios[i]['email'], usuarios[i]['tipo']]);
    }
    return body;
  }

  descargarPDF() {
    const doc = new jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;
    doc.autoTable({
      head: [['Email', 'Tipo']],
      body: this.getDataPDF(this.usuariosFiltrados.data),
    });
    doc.save('Usuarios');
  }
}
