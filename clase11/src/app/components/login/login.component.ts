import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  valid: boolean;

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.valid = false;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
    });
  }

  onSubmit() {
    let user: User = new User('', this.loginForm.value.email, this.loginForm.value.password, '');
    this.userService.login(user);
    this.loginForm.reset(this.loginForm.value);
  }

  verificar(event) {
    //console.log(event);
    if (event !== null) {
      this.valid = true;
    } else {
      //console.log('Ya no es valido');
      this.valid = false;
    }
  }
}
