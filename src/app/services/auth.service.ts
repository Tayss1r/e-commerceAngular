import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

interface User {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }

  login(username: string, password: string): boolean {
    console.log('AuthService login attempt:', username);
    
    // Mock credentials
    const validCredentials = {
      'admin': { password: 'admin123', role: 'admin' },
      'user': { password: 'user123', role: 'user' }
    };
  
    if (validCredentials[username as keyof typeof validCredentials] && validCredentials[username as keyof typeof validCredentials].password === password) {
      console.log('Credentials match');
      const user = { username, role: validCredentials[username as keyof typeof validCredentials].role };
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      this.currentUserSubject.next(user);
      return true;
    }
    
    console.log('Credentials do not match');
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin';
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}