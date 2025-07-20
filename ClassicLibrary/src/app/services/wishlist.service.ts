/**
 * Wishlist Service
 * Manages the user's wishlist functionality for saving books for later purchase
 * Provides methods to add, remove, and persist wishlist items using localStorage
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Service is available throughout the application
})
export class WishlistService {
  /** Private array to store all books in the user's wishlist */
  private wishlist: any[] = [];

  /**
   * Constructor initializes the wishlist from localStorage
   * Loads previously saved wishlist items when the service is instantiated
   */
  constructor() {
    const savedWishlist = localStorage.getItem('wishlist');  // Retrieve saved wishlist
    if (savedWishlist) {
      this.wishlist = JSON.parse(savedWishlist);  // Parse and restore wishlist data
    }
  }

  /**
   * Retrieves all items currently in the user's wishlist
   * @returns Array of books in the wishlist
   */
  getWishlist() {
    return this.wishlist;
  }

  /**
   * Adds a book to the user's wishlist
   * @param book - The book object to add to the wishlist
   */
  addToWishlist(book: any) {
    this.wishlist.push(book);  // Add book to wishlist array
    this.saveWishlist();       // Persist changes to localStorage
  }

  /**
   * Removes a book from the user's wishlist
   * @param book - The book object to remove from the wishlist
   */
  removeFromWishlist(book: any) {
    this.wishlist = this.wishlist.filter(item => item.id !== book.id);  // Filter out the book by ID
    this.saveWishlist();  // Persist changes to localStorage
  }

  /**
   * Private method to save the wishlist to localStorage
   * Called whenever the wishlist is modified
   */
  private saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));  // Convert to JSON and save
  }
}
