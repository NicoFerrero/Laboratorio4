import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { FilaComponent } from './components/fila/fila.component';
import { TestPipe } from './pipes/test.pipe';
import { EdadPipe } from './pipes/edad.pipe';
import { SexoPipe } from './pipes/sexo.pipe';
import { MiServicioService } from './servicios/mi-servicio.service';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';


@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    FormularioComponent,
    SaludarComponent,
    FilaComponent,
    TestPipe,
    EdadPipe,
    SexoPipe,
    ListadoPaisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
