import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css'],
})
export class QrComponent implements OnInit {
  @Input() data: string;
  miQRdata = null;
  constructor() {}

  ngOnInit() {
    console.log(this.data);
    this.miQRdata = JSON.stringify(this.data);
  }
}
