import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
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

  // Creating async signin function which takes email and password as parameters
  // and providing them to firebaseService signin funtion to authenticate user and navigate to home page
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.route.navigateByUrl('');
    }
  }
}
