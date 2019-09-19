import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  clientes: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.clientes = this.afs.collection('clientes').valueChanges();
  }

  getClientes() {
    return this.clientes;
  }
}
