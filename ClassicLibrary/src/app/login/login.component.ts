/**
 * Login Component
 * Handles user authentication with form validation and error handling
 * Provides a login form that validates credentials and redirects to catalog on success
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',                       // CSS selector for this component
    templateUrl: './login.component.html',        // HTML template file
    styleUrls: ['./login.component.css'],         // CSS styles file
    standalone: false                             // Not a standalone component
})
export class LoginComponent implements OnInit {
  /** Reactive form for the login form with validation */
  loginForm!: FormGroup;

  /** Flag to indicate if login attempt failed */
  loginError = false;

  /**
   * Component constructor - initializes required services
   * @param fb - FormBuilder for creating reactive forms
   * @param authService - Service for handling authentication
   * @param router - Angular router for navigation
   */
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Lifecycle hook - called after component initialization
   * Creates and configures the login form with validation rules
   */
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],  // Username field with required validation
      password: ['', [Validators.required]]   // Password field with required validation
    });
  }

  /**
   * Handles form submission for user login
   * Validates form data and attempts authentication
   * Redirects to catalog on success or shows error on failure
   */
  onSubmit(): void {
    if (this.loginForm.valid) {  // Check if form is valid
      const { username, password } = this.loginForm.value;  // Extract form values

      if (this.authService.login(username, password)) {  // Attempt authentication
        this.loginError = false;                         // Clear any previous errors
        this.router.navigate(['/catalog']);              // Redirect to catalog on success
      } else {
        this.loginError = true;  // Set error flag for failed login
      }
    }
  }
}
