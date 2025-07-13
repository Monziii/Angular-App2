import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    
    const storedUsername = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');  

    if (storedUsername === username && storedPassword === password) {
      return true;
    }

    return false;
  }

  register(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem('user', username); 
      localStorage.setItem('password', password); 
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('password'); 
  }

  getUsername(): string | null {
    return localStorage.getItem('user');
  }
}
