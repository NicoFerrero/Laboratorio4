import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

@Component({
  selector: 'app-ver-materias-profesor',
  templateUrl: './ver-materias-profesor.component.html',
  styleUrls: ['./ver-materias-profesor.component.css'],
})
export class VerMateriasProfesorComponent implements OnInit, OnChanges {
  @Input() ELEMENT_DATA;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['materia', 'cuatrimestre', 'cupo', 'alumnos'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = changes.ELEMENT_DATA.currentValue;
  }

  getDataPDF(materias: any[]) {
    const body = [];
    for (let i = 0; i < materias.length; i++) {
      body.push([
        materias[i]['materia'],
        materias[i]['cuatrimestre'],
        materias[i]['cupo'],
        materias[i]['alumnos'],
      ]);
    }
    return body;
  }

  descargarPDF() {
    const doc = new jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;
    doc.autoTable({
      head: [['Materia', 'Cuatrimestre', 'Cupo', 'Alumnos']],
      body: this.getDataPDF(this.ELEMENT_DATA),
    });
    doc.save('Materias_a_Cargo');
  }
}
