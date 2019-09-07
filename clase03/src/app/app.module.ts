import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { FilaComponent } from './components/fila/fila.component';
import { TestPipe } from './pipes/test.pipe';
import { EdadPipe } from './pipes/edad.pipe';
import { SexoPipe } from './pipes/sexo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    FormularioComponent,
    SaludarComponent,
    FilaComponent,
    TestPipe,
    EdadPipe,
    SexoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
