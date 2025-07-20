/**
 * Authentication Service
 * Handles user authentication, registration, and session management
 * Uses localStorage for persistent user sessions (simplified implementation)
 * Note: This is a basic implementation for demonstration purposes
 * In a production environment, proper authentication with backend services should be used
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Service is available throughout the application
})
export class AuthService {

  constructor() { }

  /**
   * Authenticates a user with provided credentials
   * Compares input credentials with stored values in localStorage
   * @param username - The username to authenticate
   * @param password - The password to authenticate
   * @returns true if authentication is successful, false otherwise
   */
  login(username: string, password: string): boolean {
    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');

    // Compare input credentials with stored values
    if (storedUsername === username && storedPassword === password) {
      return true;  // Authentication successful
    }

    return false;  // Authentication failed
  }

  /**
   * Registers a new user by storing credentials in localStorage
   * @param username - The username to register
   * @param password - The password to register
   * @returns true if registration is successful, false if credentials are invalid
   */
  register(username: string, password: string): boolean {
    if (username && password) {  // Validate that both fields are provided
      localStorage.setItem('user', username);     // Store username
      localStorage.setItem('password', password); // Store password
      return true;  // Registration successful
    }
    return false;  // Registration failed - invalid credentials
  }

  /**
   * Checks if a user is currently logged in
   * @returns true if user is logged in, false otherwise
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');  // Returns true if user exists in localStorage
  }

  /**
   * Logs out the current user by clearing stored credentials
   * Removes user data from localStorage
   */
  logout(): void {
    localStorage.removeItem('user');     // Remove stored username
    localStorage.removeItem('password'); // Remove stored password
  }

  /**
   * Retrieves the username of the currently logged-in user
   * @returns The username if logged in, null otherwise
   */
  getUsername(): string | null {
    return localStorage.getItem('user');  // Return stored username or null
  }
}
