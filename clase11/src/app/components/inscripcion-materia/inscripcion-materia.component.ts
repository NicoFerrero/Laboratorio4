import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Materia } from 'src/app/models/materia';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css'],
})
export class InscripcionMateriaComponent implements OnInit {
  materiaForm: FormGroup;
  materias: Materia[];
  alumno: string;
  inscripciones;
  valido = true;
  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.alumno = this.userService.currentUser().uid;
    this.materiaForm = this.fb.group({
      materia: ['', [Validators.required]],
    });

    this.userService.getMaterias().subscribe(materias => {
      this.materias = materias as Materia[];
      //console.log(materias);
    });
    this.userService.getInscripciones(this.alumno).subscribe(data => {
      //console.log(data);
      this.inscripciones = data;
    });
  }

  onSubmit() {
    let inscripcion = {
      alumno: this.alumno,
      materia: this.materiaForm.value.materia,
    };

    this.userService.inscripcionMateria(inscripcion);
    this.materiaForm.reset(this.materiaForm.value);
  }

  onSelected(e) {
    this.valido = true;
    for (const aux in this.inscripciones) {
      if (this.inscripciones[aux].materia === e.value) {
        this.valido = false;
      }
    }
  }
}
