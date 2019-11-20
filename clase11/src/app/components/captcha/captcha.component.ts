import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css'],
})
export class CaptchaComponent implements OnInit {
  @Output() verificar = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  resolved(event) {
    this.verificar.emit(event);
  }
}
