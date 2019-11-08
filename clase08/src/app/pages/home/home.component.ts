import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/auth/usuario.service';
import { Auto } from 'src/app/models/auto';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  auto: Auto = {
    marca: '',
    modelo: '',
    anio: '',
    foto: '',
  };

  autos: Auto[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.onGetAutos();
  }

  onLogOut() {
    localStorage.removeItem('token');
  }

  onGetAutos() {
    this.usuarioService.getAutos().subscribe(data => {
      console.log(data);
      this.autos = data['rta'];
    });
  }

  onRegistro() {
    let path = 'autos/' + this.auto.modelo + '_' + this.auto.marca;
    this.usuarioService.traerArchivo(path).subscribe(data => {
      this.auto.foto = data;
      this.usuarioService.registroAuto(this.auto).subscribe(data => {
        console.log(data);
        this.onGetAutos();
        this.auto = { marca: '', modelo: '', anio: '', foto: '' };
      });
    });
  }

  subirArchivo(event) {
    let path = 'autos/' + this.auto.modelo + '_' + this.auto.marca;
    this.usuarioService.subirArchivo(event.target.files[0], path).then(data => {
      console.log('exito');
    });
  }

  getDataPDF(autos: Auto[]) {
    const body = [];
    for (let i = 0; i < this.autos.length; i++) {
      body.push([
        this.autos[i]['_id'],
        this.autos[i]['marca'],
        this.autos[i]['modelo'],
        this.autos[i]['anio'],
      ]);
    }
    return body;
  }

  descargarPDF() {
    const doc = new jsPDF('portrait', 'px', 'a4') as jsPDFWithPlugin;
    doc.autoTable({
      head: [['id', 'marca', 'modelo', 'anio']],
      body: this.getDataPDF(this.autos),
    });
    doc.save('grilla_autos');
  }
}
