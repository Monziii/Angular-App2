/**
 * Main Application Module for ClassicLibrary
 * This module serves as the root module for the Classic Literature E-commerce application
 * It configures routing, imports necessary modules, and declares all application components
 */

// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Application components
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

/**
 * Application Routes Configuration
 * Defines the navigation structure and component mapping for the application
 */
const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' }, // Default route redirects to catalog
  { path: 'catalog', component: CatalogComponent },        // Book catalog page
  { path: 'cart', component: CartComponent },              // Shopping cart page
  { path: 'login', component: LoginComponent },            // User login page
  { path: 'register', component: RegisterComponent },      // User registration page
  { path: 'checkout', component: CheckoutComponent },      // Checkout process page
  { path: 'wishlist', component: WishlistComponent }       // User wishlist page
];

/**
 * AppModule Configuration
 * Main module that bootstraps the application and configures all dependencies
 */
@NgModule({
  // All components that belong to this module
  declarations: [
    AppComponent,           // Root application component
    CatalogComponent,       // Book catalog display component
    CartComponent,          // Shopping cart management component
    LoginComponent,         // User authentication component
    RegisterComponent,      // User registration component
    CheckoutComponent,      // Purchase completion component
    WishlistComponent       // User wishlist management component
  ],
  // External modules and dependencies
  imports: [
    BrowserModule,          // Required for browser applications
    ReactiveFormsModule,    // For reactive form handling
    FormsModule,           // For template-driven forms
    RouterModule.forRoot(routes) // Application routing configuration
  ],
  // Service providers (currently empty, services are provided at component level)
  providers: [],
  // Root component that bootstraps the application
  bootstrap: [AppComponent]
})
export class AppModule { }
