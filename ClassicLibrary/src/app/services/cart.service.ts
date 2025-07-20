/**
 * Cart Service
 * Manages the shopping cart functionality for the ClassicLibrary application
 * Provides methods to add, remove, and manage items in the user's shopping cart
 * Uses localStorage for persistent cart data
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';

/**
 * Interface representing an item in the shopping cart
 * Contains a book and its quantity
 */
export interface CartItem {
  book: Book;      // The book object
  quantity: number; // Number of copies of this book in the cart
}

@Injectable({
  providedIn: 'root'  // Service is available throughout the application
})
export class CartService {
  /** Private array to store all items in the shopping cart */
  private cartItems: CartItem[] = [];

  /** BehaviorSubject to track the total number of items in the cart */
  private cartItemCount = new BehaviorSubject<number>(0);

  /** Observable that components can subscribe to for cart count updates */
  cartItemCount$ = this.cartItemCount.asObservable();

  /**
   * Constructor initializes the cart from localStorage
   * Loads previously saved cart items when the service is instantiated
   */
  constructor() {
    this.loadCartFromStorage();  // Load cart data from localStorage
  }

  /**
   * Adds a book to the shopping cart
   * If the book already exists, increases its quantity by 1
   * @param book - The book to add to the cart
   */
  addToCart(book: Book): void {
    const existingItem = this.cartItems.find(item => item.book.id === book.id);
    if (existingItem) {
      existingItem.quantity += 1;  // Increase quantity if book already exists
    } else {
      this.cartItems.push({ book, quantity: 1 });  // Add new item with quantity 1
    }
    this.saveCartToStorage();  // Save cart data to localStorage
    this.updateCartCount();    // Update the cart count display
  }

  /**
   * Retrieves all items currently in the shopping cart
   * @returns Array of cart items
   */
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  /**
   * Removes a specific item from the shopping cart
   * @param cartItem - The cart item to remove
   */
  removeFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem);
    if (index > -1) {
      this.cartItems.splice(index, 1);  // Remove the item from the array
      this.saveCartToStorage();         // Save cart data to localStorage
      this.updateCartCount();           // Update the cart count display
    }
  }

  /**
   * Increases the quantity of a specific cart item by 1
   * @param cartItem - The cart item to increase quantity for
   */
  increaseQuantity(cartItem: CartItem): void {
    cartItem.quantity += 1;     // Increase quantity by 1
    this.saveCartToStorage();   // Save cart data to localStorage
    this.updateCartCount();     // Update the cart count display
  }

  /**
   * Decreases the quantity of a specific cart item by 1
   * If quantity becomes 0, removes the item from the cart
   * @param cartItem - The cart item to decrease quantity for
   */
  decreaseQuantity(cartItem: CartItem): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;   // Decrease quantity by 1
    } else {
      this.removeFromCart(cartItem);  // Remove item if quantity would become 0
    }
    this.saveCartToStorage();   // Save cart data to localStorage
    this.updateCartCount();     // Update the cart count display
  }

  /**
   * Calculates the total price of all items in the shopping cart
   * @returns Total price as a number
   */
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.book.price * item.quantity), 0);
  }

  /**
   * Calculates the total number of items in the shopping cart
   * @returns Total number of items (sum of all quantities)
   */
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Removes all items from the shopping cart
   * Used when completing a purchase or clearing the cart
   */
  clearCart(): void {
    this.cartItems = [];        // Clear the cart array
    this.saveCartToStorage();   // Save cart data to localStorage
    this.updateCartCount();     // Update the cart count display
  }

  /**
   * Private method to update the cart count observable
   * Called whenever the cart contents change
   */
  private updateCartCount(): void {
    this.cartItemCount.next(this.getTotalItems());  // Emit new count to subscribers
  }

  /**
   * Private method to save cart data to localStorage
   * Called whenever the cart contents change
   */
  private saveCartToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));  // Convert to JSON and save
  }

  /**
   * Private method to load cart data from localStorage
   * Called during service initialization
   */
  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('cart');  // Retrieve saved cart
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);  // Parse and restore cart data
      this.updateCartCount();  // Update cart count after loading
    }
  }
}
