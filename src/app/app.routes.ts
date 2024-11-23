import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
  
  return router.createUrlTree(['/login']);
};

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
    canActivate: [authGuard]
  }
];