import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user.service';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-ver-inscripciones',
  templateUrl: './ver-inscripciones.component.html',
  styleUrls: ['./ver-inscripciones.component.css'],
})
export class VerInscripcionesComponent implements OnInit, OnChanges {
  @Input() ELEMENT_DATA;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['materia'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  materias: Materia[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getMaterias().subscribe(materias => {
      this.materias = materias;
      console.log(this.materias);
      for (const aux in this.ELEMENT_DATA) {
        for (const materia in this.materias) {
          if (this.ELEMENT_DATA[aux].materia === this.materias[materia].uid) {
            this.ELEMENT_DATA[aux].materia = this.materias[materia].materia;
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
    for (const aux in this.ELEMENT_DATA) {
      for (const materia in this.materias) {
        if (this.ELEMENT_DATA[aux].uid === this.materias[materia].uid) {
          this.ELEMENT_DATA[aux].materia = this.materias[materia].materia;
          break;
        }
      }
    }
    this.dataSource.data = changes.ELEMENT_DATA.currentValue;
  }
}
