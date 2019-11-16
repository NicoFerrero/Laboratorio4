import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
      tipo: ['', [Validators.required]],
    });
  }

  onSubmit() {
    //console.warn(this.registerForm.value);
    let user: User = new User(
      '',
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.tipo,
    );
    this.userService.register(user);
  }

  onSelected(e) {
    console.log(e.value);
  }
}
