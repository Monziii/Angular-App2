/**
 * Root Application Component
 * This component serves as the main container for the ClassicLibrary application
 * It handles navigation, user authentication state, and cart item count display
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',                    // CSS selector for this component
    templateUrl: './app.component.html',     // HTML template file
    styleUrls: ['./app.component.css'],      // CSS styles file
    standalone: false                        // Not a standalone component
})
export class AppComponent implements OnInit {
  // Application title displayed in the header
  title = 'Classic Library';

  // Number of items in the shopping cart (displayed in navigation)
  cartItemCount: number = 0;

  // Current logged-in user's username
  username: string | null = null;

  // Authentication state flag
  isLoggedIn: boolean = false;

  // Flag to control welcome message visibility (currently unused)
  welcomeMessageVisible = false;

  /**
   * Component constructor - initializes required services
   * @param cartService - Service for managing shopping cart operations
   * @param authService - Service for handling user authentication
   * @param router - Angular router for navigation
   */
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Lifecycle hook - called after component initialization
   * Sets up subscriptions and initializes component state
   */
  ngOnInit(): void {
    // Subscribe to cart item count changes to update the display
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });

    // Get current user information and update authentication state
    this.username = this.authService.getUsername();
    this.isLoggedIn = !!this.username;

    /*
     * Commented out code for auto-logout functionality
     * This would automatically log out the user after 3 seconds
     * Currently disabled but kept for potential future use
     */
    /* if (this.username) {
      setTimeout(() => {
        this.username = null;
      }, 3000);
    } */
  }

  /**
   * Navigate to the shopping cart page
   * Called when user clicks on cart icon in navigation
   */
  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  /**
   * Log out the current user
   * Clears authentication state and redirects to login page
   */
  logout(): void {
    this.authService.logout();           // Clear authentication data
    this.username = null;                // Reset username
    this.isLoggedIn = false;             // Update authentication state
    this.router.navigate(['/login']);    // Redirect to login page
  }
}
