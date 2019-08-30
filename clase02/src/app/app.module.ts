import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SaludarComponent } from './components/saludar/saludar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    FormularioComponent,
    SaludarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
