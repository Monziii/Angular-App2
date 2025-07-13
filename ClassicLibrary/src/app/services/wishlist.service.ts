import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      this.wishlist = JSON.parse(savedWishlist);
    }
  }

  // Get all items in the wishlist
  getWishlist() {
    return this.wishlist;
  }

  // Add a book to the wishlist
  addToWishlist(book: any) {
    this.wishlist.push(book);
    this.saveWishlist();
  }

  // Remove a book from the wishlist
  removeFromWishlist(book: any) {
    this.wishlist = this.wishlist.filter(item => item.id !== book.id);
    this.saveWishlist();
  }

  // Save the wishlist to local storage
  private saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
}
