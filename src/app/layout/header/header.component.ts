import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSignedIn = this.firebaseService.isLoggedIn;
  userName: any;

  constructor(private firebaseService: FirebaseService, private route: Router) {
    const data = localStorage.getItem('user');
    if (data) {
      //getting user email and reflecting on header if user sign in
      this.userName = JSON.parse(data).email;
    }
  }

  // handling logout firebase service
  handleLogout() {
    this.firebaseService.logout();
  }

  // function to Navigate to signin page
  goToSignIn() {
    this.route.navigateByUrl('/signin');
  }

  // function to Navigate to signup page
  goToSignUp() {
    this.route.navigateByUrl('/signup');
  }
}
