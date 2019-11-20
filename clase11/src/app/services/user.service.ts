import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable, merge } from 'rxjs';
import { Materia } from '../models/materia';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  newUser: User;
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  login(user: User) {
    this.afAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .catch(err => console.log('Error: ' + err))
      .then(cred => {
        if (cred) {
          this.router.navigate(['/home']);
        }
      });
  }

  currentUser() {
    return this.afAuth.auth.currentUser;
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

  getUser(uid: string) {
    return this.afs.doc(`Users/${uid}`).valueChanges();
  }

  async register(user) {
    try {
      const cred = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.newUser = user;
      //console.log(cred);
      this.insertUserData(cred).then(() => {
        console.log('exito');
        this.router.navigate(['/login']);
      });
    } catch (error) {
      console.log('Error: ' + error);
    }
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.afs.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      tipo: this.newUser.tipo,
      uid: userCredential.user.uid,
    });
  }

  AgregarMateria(materia: Materia) {
    materia.alumnos = 0;
    this.afs
      .collection('Materias')
      .add(materia)
      .then(ref => {
        this.afs.doc(`Materias/${ref.id}`).set(
          {
            uid: ref.id,
          },
          { merge: true },
        );
      });
  }

  getProfesores() {
    return this.afs.collection('Users', ref => ref.where('tipo', '==', 'profesor')).valueChanges();
  }

  getMaterias() {
    return this.afs.collection('Materias').valueChanges();
  }

  getUsers() {
    return this.afs.collection('Users').valueChanges();
  }

  inscripcionMateria(inscripcion: any) {
    this.afs
      .collection('Inscripciones')
      .add({
        alumno: inscripcion.alumno,
        materia: inscripcion.materia,
      })
      .then(ref => {
        this.afs
          .doc(`Inscripciones/${ref.id}`)
          .set(
            {
              uid: ref.id,
            },
            { merge: true },
          )
          .then(() => {
            this.afs.doc(`Materias/${inscripcion.materia}`).set(
              {
                alumnos: firebase.firestore.FieldValue.increment(1),
              },
              { merge: true },
            );
          });
      });
  }

  getInscripciones(uid: string) {
    return this.afs
      .collection('Inscripciones', ref => ref.where('alumno', '==', uid))
      .valueChanges();
  }

  getMateriasProfesor(uid: string) {
    return this.afs.collection('Materias', ref => ref.where('profesor', '==', uid)).valueChanges();
  }
}
