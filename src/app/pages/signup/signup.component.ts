import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  title = 'github-api-app';
  isSignedIn = false;

  constructor(
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }

  // Creating async signup function which takes email and password as parameters
  // and providing them to firebaseService signup funtion to create and authenticate user and navigate to home page
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);

    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.route.navigateByUrl('');
    }
  }
}
