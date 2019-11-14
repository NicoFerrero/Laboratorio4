import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    tipo: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    //console.warn(this.registerForm.value);
    let user: User = new User('', this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.tipo);
    this.userService.register(user);
  }

  onSelected(e){
    //console.log(e.target.value);
  }
}
