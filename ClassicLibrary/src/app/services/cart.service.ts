import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';

export interface CartItem {
  book: Book;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  addToCart(book: Book): void {
    const existingItem = this.cartItems.find(item => item.book.id === book.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ book, quantity: 1 });
    }
    this.updateCartCount();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  removeFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.updateCartCount();
    }
  }

  increaseQuantity(cartItem: CartItem): void {
    cartItem.quantity += 1;
    this.updateCartCount();
  }

  decreaseQuantity(cartItem: CartItem): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      this.removeFromCart(cartItem);
    }
    this.updateCartCount();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.book.price * item.quantity), 0);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartCount();
  }

  private updateCartCount(): void {
    this.cartItemCount.next(this.getTotalItems());
  }
}
