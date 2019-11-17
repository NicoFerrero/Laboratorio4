import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'firebase';
@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css'],
})
export class AltaMateriaComponent implements OnInit {
  materiaForm: FormGroup;
  profesores: User[];

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.materiaForm = this.fb.group({
      materia: ['', [Validators.required]],
      cuatrimestre: [
        '',
        [
          Validators.required,
          Validators.maxLength(1),
          Validators.minLength(1),
          Validators.min(1),
          Validators.max(2),
        ],
      ],
      cupo: [
        '',
        [
          Validators.required,
          Validators.maxLength(2),
          Validators.minLength(2),
          Validators.min(10),
          Validators.max(30),
        ],
      ],
      profesor: ['', [Validators.required]],
    });

    this.userService.getProfesores().subscribe(profesores => {
      this.profesores = profesores as User[];
    });
  }

  onSubmit() {
    this.userService.AgregarMateria(this.materiaForm.value);
  }
}
