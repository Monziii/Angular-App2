import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css'],
    standalone: false
})

export class WishlistComponent implements OnInit {
  wishlistItems: Book[] = [];

  constructor(private wishlistService: WishlistService, private cartService: CartService) { }

  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlist();
  }

  removeFromWishlist(book: Book): void {
    this.wishlistService.removeFromWishlist(book);
    this.wishlistItems = this.wishlistService.getWishlist(); // Refresh list
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
    this.removeFromWishlist(book); // remove from wishlist after adding to cart
  }

  // Method to add all items from wishlist to cart
  addAllToCart(): void {
    this.wishlistItems.forEach(item => {
      this.cartService.addToCart(item);
    });
    this.wishlistItems = []; // clear the wishlist after adding all items to the cart
  }

  getWishlistTotal(): number {
    return this.wishlistItems.reduce((total, item) => total + item.price, 0);
  }
}
