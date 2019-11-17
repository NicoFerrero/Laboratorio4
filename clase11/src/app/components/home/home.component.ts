import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  email;
  userData: User;
  profesores: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(this.userService.currentUser().uid).subscribe(data => {
      this.userData = data;
    });
    this.email = this.userService.currentUser() ? this.userService.currentUser().email : '';
  }

  getProfesores() {
    this.userService.getProfesores().subscribe(data => {
      this.profesores = data as User[];
    });
  }
}
