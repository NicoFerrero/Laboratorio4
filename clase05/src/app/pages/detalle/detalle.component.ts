import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  nombre: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Sirve si dentro de la ruta no vamos a cambiar dicho parametro
    // this.nombre = this.route.snapshot.paramMap.get('nombre');

    // Sirve si dentro de la ruta queremos cambiar dicho parametro
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
    });
  }
}
