import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService, CartItem } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
    standalone: false
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  checkoutForm!: FormGroup;
  subtotal: number = 0;
  shipping: number = 5.99;
  total: number = 0;
  purchaseCompleted: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotals();
    this.initForm();
  }

  initForm(): void {
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  calculateTotals(): void {
    this.subtotal = this.cartService.getTotalPrice();
    this.total = this.subtotal + this.shipping;
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.cartService.clearCart();
      this.purchaseCompleted = true;

      setTimeout(() => {
        this.router.navigate(['/catalog']);
      }, 2000);
    }
  }

  completePurchase(): void {
    this.cartService.clearCart();
    this.purchaseCompleted = true;

    setTimeout(() => {
      this.router.navigate(['/catalog']);
    }, 2000);
  }
}
