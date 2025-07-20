/**
 * Checkout Component
 * Handles the final purchase process with shipping information and payment details
 * Provides a comprehensive checkout form with validation and order completion
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService, CartItem } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',                     // CSS selector for this component
    templateUrl: './checkout.component.html',      // HTML template file
    styleUrls: ['./checkout.component.css'],       // CSS styles file
    standalone: false                              // Not a standalone component
})
export class CheckoutComponent implements OnInit {
  /** Array of items in the shopping cart for checkout */
  cartItems: CartItem[] = [];

  /** Reactive form for the checkout form with validation */
  checkoutForm!: FormGroup;

  /** Subtotal of all items in the cart (before shipping) */
  subtotal: number = 0;

  /** Fixed shipping cost */
  shipping: number = 5.99;

  /** Total cost including shipping */
  total: number = 0;

  /** Flag to indicate if purchase has been completed */
  purchaseCompleted: boolean = false;

  /**
   * Component constructor - initializes required services
   * @param cartService - Service for managing shopping cart operations
   * @param router - Angular router for navigation
   * @param fb - FormBuilder for creating reactive forms
   */
  constructor(
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  /**
   * Lifecycle hook - called after component initialization
   * Loads cart items, calculates totals, and initializes the checkout form
   */
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();  // Get current cart items
    this.calculateTotals();                            // Calculate pricing
    this.initForm();                                   // Initialize checkout form
  }

  /**
   * Initializes the checkout form with validation rules
   * Includes personal information, shipping address, and payment details
   */
  initForm(): void {
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required]],                    // First name with required validation
      lastName: ['', [Validators.required]],                     // Last name with required validation
      email: ['', [Validators.required, Validators.email]],      // Email with required and email validation
      phone: ['', [Validators.required]],                        // Phone number with required validation
      address: ['', [Validators.required]],                      // Shipping address with required validation
      city: ['', [Validators.required]],                         // City with required validation
      postalCode: ['', [Validators.required]],                   // Postal code with required validation
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]], // Credit card with format validation
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)]], // Expiry date with MM/YY format
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]                           // CVV with 3-4 digit validation
    });
  }

  /**
   * Calculates the subtotal and total including shipping
   */
  calculateTotals(): void {
    this.subtotal = this.cartService.getTotalPrice();  // Get subtotal from cart service
    this.total = this.subtotal + this.shipping;        // Add shipping to get total
  }

  /**
   * Handles form submission for checkout
   * Validates form data and completes the purchase
   * Clears cart and redirects to catalog on success
   */
  onSubmit(): void {
    if (this.checkoutForm.valid) {  // Check if form is valid
      this.cartService.clearCart();  // Clear the shopping cart
      this.purchaseCompleted = true; // Set purchase completion flag

      // Redirect to catalog after 2 seconds to show completion message
      setTimeout(() => {
        this.router.navigate(['/catalog']);
      }, 2000);
    }
  }

  /**
   * Completes the purchase without form validation
   * Used for quick checkout or guest checkout scenarios
   * Clears cart and redirects to catalog
   */
  completePurchase(): void {
    this.cartService.clearCart();  // Clear the shopping cart
    this.purchaseCompleted = true; // Set purchase completion flag

    // Redirect to catalog after 2 seconds to show completion message
    setTimeout(() => {
      this.router.navigate(['/catalog']);
    }, 2000);
  }
}
