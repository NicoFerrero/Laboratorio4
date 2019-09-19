import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [HomeComponent, DetalleComponent, ClientesComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
