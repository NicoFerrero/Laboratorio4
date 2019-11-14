import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    let user: User = new User('', this.loginForm.value.email, this.loginForm.value.password, '');
    this.userService.login(user);
  }
}
