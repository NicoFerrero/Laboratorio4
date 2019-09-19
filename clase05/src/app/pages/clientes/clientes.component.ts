import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes: any[];

  constructor(private clientesService: ClientesService, private router: Router) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  enviarNombre(nombre: string) {
    this.router.navigate(['clientes/detalle', nombre]);
  }
}
