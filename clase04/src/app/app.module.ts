import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MiServicioService } from './servicios/mi-servicio.service';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';

@NgModule({
  declarations: [AppComponent, ListadoPaisesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
