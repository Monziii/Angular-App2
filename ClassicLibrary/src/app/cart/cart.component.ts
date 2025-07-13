import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: false
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(cartItem: CartItem): void {
    this.cartService.increaseQuantity(cartItem);
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(cartItem: CartItem): void {
    this.cartService.decreaseQuantity(cartItem);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}

