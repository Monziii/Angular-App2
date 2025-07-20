/**
 * Cart Component
 * Displays the user's shopping cart with items, quantities, and total pricing
 * Allows users to modify quantities, remove items, and proceed to checkout
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cart',                        // CSS selector for this component
    templateUrl: './cart.component.html',         // HTML template file
    styleUrls: ['./cart.component.css'],          // CSS styles file
    standalone: false                             // Not a standalone component
})
export class CartComponent implements OnInit, OnDestroy {
  /** Array of items currently in the shopping cart */
  cartItems: CartItem[] = [];

  /** Subscription to cart updates */
  private cartSubscription: Subscription = new Subscription();

  /**
   * Component constructor - initializes required services
   * @param cartService - Service for managing shopping cart operations
   * @param router - Angular router for navigation
   */
  constructor(private cartService: CartService, private router: Router) {}

  /**
   * Lifecycle hook - called after component initialization
   * Loads current cart items and subscribes to cart updates
   */
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();  // Get current cart items

    // Subscribe to cart updates to automatically refresh the display
    this.cartSubscription = this.cartService.cartItemCount$.subscribe(() => {
      this.cartItems = this.cartService.getCartItems();  // Refresh cart items when cart changes
    });
  }

  /**
   * Lifecycle hook - called before component destruction
   * Cleans up subscriptions to prevent memory leaks
   */
  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();  // Clean up subscription
    }
  }

  /**
   * Removes a specific item from the shopping cart
   * @param cartItem - The cart item to remove
   */
  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);        // Remove item from cart service
    // Cart items will be automatically updated via subscription
  }

  /**
   * Increases the quantity of a specific cart item by 1
   * @param cartItem - The cart item to increase quantity for
   */
  increaseQuantity(cartItem: CartItem): void {
    this.cartService.increaseQuantity(cartItem);      // Increase quantity in cart service
    // Cart items will be automatically updated via subscription
  }

  /**
   * Decreases the quantity of a specific cart item by 1
   * If quantity becomes 0, the item is removed from the cart
   * @param cartItem - The cart item to decrease quantity for
   */
  decreaseQuantity(cartItem: CartItem): void {
    this.cartService.decreaseQuantity(cartItem);      // Decrease quantity in cart service
    // Cart items will be automatically updated via subscription
  }

  /**
   * Calculates the total price of all items in the shopping cart
   * @returns Total price as a number
   */
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();  // Get total price from cart service
  }

  /**
   * Calculates the total number of items in the shopping cart
   * @returns Total number of items (sum of all quantities)
   */
  getTotalItems(): number {
    return this.cartService.getTotalItems();  // Get total items from cart service
  }

  /**
   * Navigates to the checkout page to complete the purchase
   */
  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);  // Navigate to checkout component
  }
}

