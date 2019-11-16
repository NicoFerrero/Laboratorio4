import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';

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
}
