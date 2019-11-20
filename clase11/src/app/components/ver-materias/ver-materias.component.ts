import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
  save(arg0: string);
}

@Component({
  selector: 'app-ver-materias',
  templateUrl: './ver-materias.component.html',
  styleUrls: ['./ver-materias.component.css'],
})
export class VerMateriasComponent implements OnInit, OnChanges {
  @Input() ELEMENT_DATA;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['materia', 'profesor', 'cuatrimestre', 'cupo', 'alumnos'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  profesores: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getProfesores().subscribe(profesores => {
      this.profesores = profesores;
      for (const materias in this.ELEMENT_DATA) {
        for (const profesores in this.profesores) {
          if (this.ELEMENT_DATA[materias].profesor == this.profesores[profesores].uid) {
            this.ELEMENT_DATA[materias].profesor = this.profesores[profesores].email;
            break;
          }
        }
      }
    });

    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const materias in this.ELEMENT_DATA) {
      for (const profesores in this.profesores) {
        if (this.ELEMENT_DATA[materias].profesor == this.profesores[profesores].uid) {
          this.ELEMENT_DATA[materias].profesor = this.profesores[profesores].email;
          break;
        }
      }
    }
    this.dataSource.data = changes.ELEMENT_DATA.currentValue;
  }

  getDataPDF(materias: any[]) {
    const body = [];
    for (let i = 0; i < materias.length; i++) {
      body.push([
        materias[i]['materia'],
        materias[i]['profesor'],
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
      head: [['Materia', 'Profesor', 'Cuatrimestre', 'Cupo', 'Alumnos']],
      body: this.getDataPDF(this.ELEMENT_DATA),
    });
    doc.save('Materias');
  }
}
