import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-container-tabla',
  templateUrl: './container-tabla.component.html',
  styleUrls: ['./container-tabla.component.css'],
})
export class ContainerTablaComponent implements OnInit, OnDestroy {
  datos: any;
  suscripcion: Subscription;
  location: Location;
  ruta;
  alumno: string;
  profesor: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    if (location.href.split('/')[3] === 'materias') {
      this.ruta = 'Materias';
      this.suscripcion = this.userService.getMaterias().subscribe(materias => {
        this.datos = materias;
      });
    } else if (location.href.split('/')[3] === 'listado-usuarios') {
      this.ruta = 'Usuarios';
      this.suscripcion = this.userService.getUsers().subscribe(usuarios => {
        this.datos = usuarios;
      });
    } else if (location.href.split('/')[3] === 'inscripciones') {
      this.alumno = this.userService.currentUser().uid;
      this.ruta = 'Inscripciones';
      this.suscripcion = this.userService.getInscripciones(this.alumno).subscribe(data => {
        this.datos = data;
      });
    } else if (location.href.split('/')[3] === 'materias-a-cargo') {
      this.profesor = this.userService.currentUser().uid;
      this.ruta = 'Materias a cargo';
      this.suscripcion = this.userService.getMateriasProfesor(this.profesor).subscribe(data => {
        this.datos = data;
      });
    }
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
