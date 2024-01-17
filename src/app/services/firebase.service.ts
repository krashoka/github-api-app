import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false; // initially setting login value as false

  constructor(private firebaseauth: AngularFireAuth, private route: Router) {}

  // creating signin authentication and setting user credentials to localStorage
  async signin(email: string, password: string) {
    await this.firebaseauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  // creating signup authentication and setting user credentials to localStorage
  async signup(email: string, password: string) {
    await this.firebaseauth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }

  // logout funtion
  logout() {
    this.isLoggedIn = false;
    this.firebaseauth.signOut();
    this.route.navigateByUrl('/signin');
    localStorage.removeItem('user');
  }
}
