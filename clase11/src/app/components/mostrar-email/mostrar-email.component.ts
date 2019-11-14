import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit {
  @Input() email;
  constructor() { }

  ngOnInit() {
  }

}
