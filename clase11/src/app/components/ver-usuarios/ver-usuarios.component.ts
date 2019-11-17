import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
}
