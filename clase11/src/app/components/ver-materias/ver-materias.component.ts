import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user.service';

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
}
