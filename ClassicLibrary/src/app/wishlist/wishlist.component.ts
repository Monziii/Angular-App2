/**
 * Wishlist Component
 * Displays the user's saved books and allows management of wishlist items
 * Provides functionality to move items from wishlist to cart and calculate total value
 */

import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-wishlist',                      // CSS selector for this component
    templateUrl: './wishlist.component.html',       // HTML template file
    styleUrls: ['./wishlist.component.css'],        // CSS styles file
    standalone: false                               // Not a standalone component
})

export class WishlistComponent implements OnInit {
  /** Array of books in the user's wishlist */
  wishlistItems: Book[] = [];

  /**
   * Component constructor - initializes required services
   * @param wishlistService - Service for managing wishlist operations
   * @param cartService - Service for managing shopping cart operations
   */
  constructor(private wishlistService: WishlistService, private cartService: CartService) { }

  /**
   * Lifecycle hook - called after component initialization
   * Loads current wishlist items from the wishlist service
   */
  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlist();  // Get current wishlist items
  }

  /**
   * Removes a book from the user's wishlist
   * @param book - The book to remove from the wishlist
   */
  removeFromWishlist(book: Book): void {
    this.wishlistService.removeFromWishlist(book);            // Remove book from wishlist service
    this.wishlistItems = this.wishlistService.getWishlist();  // Refresh wishlist display
  }

  /**
   * Adds a book from wishlist to the shopping cart
   * Removes the book from wishlist after adding to cart
   * @param book - The book to add to the cart
   */
  addToCart(book: Book): void {
    this.cartService.addToCart(book);                         // Add book to shopping cart
    this.removeFromWishlist(book);                            // Remove from wishlist after adding to cart
  }

  /**
   * Adds all books from the wishlist to the shopping cart
   * Clears the wishlist after adding all items
   */
  addAllToCart(): void {
    this.wishlistItems.forEach(item => {
      this.cartService.addToCart(item);  // Add each wishlist item to cart
    });
    this.wishlistItems = [];  // Clear the wishlist after adding all items to the cart
  }

  /**
   * Calculates the total value of all books in the wishlist
   * @returns Total price of all wishlist items
   */
  getWishlistTotal(): number {
    return this.wishlistItems.reduce((total, item) => total + item.price, 0);  // Sum all book prices
  }
}
