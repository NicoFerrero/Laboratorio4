import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  user: User = null;
  burger: HTMLDivElement;
  nav: HTMLUListElement;
  navLinks: NodeListOf<HTMLLIElement>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.burger = document.querySelector('.burger') as HTMLDivElement;
    this.nav = document.querySelector('.nav-links') as HTMLUListElement;
    this.navLinks = document.querySelectorAll('.nav-links li') as NodeListOf<HTMLLIElement>;
    this.userService.isLoggedIn().subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      },
      err => console.log(err),
    );
  }

  toggleMenu() {
    this.nav.classList.toggle('nav-active');

    this.navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    this.burger.classList.toggle('toggle');
  }

  logOut() {
    this.userService
      .logOut()
      .then(() => {
        console.log('Cerro sesion');
        this.router.navigate(['']);
      })
      .catch(() => console.log('Error al cerrar sesion'));
  }
}
