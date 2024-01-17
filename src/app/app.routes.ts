import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ReposComponent } from './components/repos/repos.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { authGaurdGuard } from './AuthGaurd/auth-gaurd.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
    canActivate: [authGaurdGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    title: 'Signin Page',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup Page',
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent,
    title: 'Page Not found',
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    title: 'Page Not found',
  },
];

export default routes;
