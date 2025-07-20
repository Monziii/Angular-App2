/**
 * Register Component
 * Handles user registration with form validation and password confirmation
 * Provides a registration form that creates new user accounts and redirects to login
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',                     // CSS selector for this component
    templateUrl: './register.component.html',      // HTML template file
    styleUrls: ['./register.component.css'],       // CSS styles file
    standalone: false                              // Not a standalone component
})
export class RegisterComponent implements OnInit {
  /** Reactive form for the registration form with validation */
  registerForm!: FormGroup;

  /** Flag to indicate if registration attempt failed */
  registerError = false;

  /** Flag to indicate if registration was successful */
  registrationSuccess = false;

  /**
   * Component constructor - initializes required services
   * @param fb - FormBuilder for creating reactive forms
   * @param authService - Service for handling user registration
   * @param router - Angular router for navigation
   */
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Lifecycle hook - called after component initialization
   * Creates and configures the registration form with validation rules
   */
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],                    // Username field with required validation
      email: ['', [Validators.required, Validators.email]],     // Email field with required and email validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password with required and minimum length validation
      confirmPassword: ['', [Validators.required]]              // Confirm password field with required validation
    }, { validators: this.passwordMatchValidator });            // Custom validator for password matching
  }

  /**
   * Custom validator to ensure password and confirm password match
   * @param form - The form group to validate
   * @returns Validation error object if passwords don't match, null otherwise
   */
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');           // Get password field
    const confirmPassword = form.get('confirmPassword'); // Get confirm password field

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });  // Set error on confirm password field
      return { passwordMismatch: true };                      // Return validation error
    }

    return null;  // Passwords match, no validation error
  }

  /**
   * Handles form submission for user registration
   * Validates form data and attempts to register the user
   * Shows success message and redirects to login on success
   */
  onSubmit(): void {
    if (this.registerForm.valid) {  // Check if form is valid
      const { username, email, password } = this.registerForm.value;  // Extract form values

      if (this.authService.register(username, password)) {  // Attempt registration
        this.registrationSuccess = true;                    // Set success flag
        this.registerError = false;                         // Clear any previous errors

        // Redirect to login page after 2 seconds to show success message
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      } else {
        this.registerError = true;        // Set error flag for failed registration
        this.registrationSuccess = false; // Clear success flag
      }
    }
  }
}
