/**
 * Catalog Component
 * Displays the main book catalog with pagination, search, and shopping cart functionality
 * Allows users to browse books, add them to cart or wishlist, and navigate through pages
 */

import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
    selector: 'app-catalog',                    // CSS selector for this component
    templateUrl: './catalog.component.html',     // HTML template file
    styleUrls: ['./catalog.component.css'],      // CSS styles file
    standalone: false                            // Not a standalone component
})
export class CatalogComponent implements OnInit {
  /** Array of books to display on the current page */
  books: Book[] = [];

  /** Current page number (1-based indexing) */
  currentPage: number = 1;

  /** Number of books to display per page */
  pageSize: number = 6;

  /** Total number of pages available */
  totalPages: number = 0;

  /** Flag to show cart confirmation message */
  showCartConfirmation: boolean = false;

  /** Name of the book that was just added to cart */
  addedBookTitle: string = '';

  /**
   * Component constructor - initializes required services
   * @param bookService - Service for retrieving book data
   * @param cartService - Service for managing shopping cart
   * @param wishlistService - Service for managing wishlist
   */
  constructor(private bookService: BookService, private cartService: CartService, private wishlistService: WishlistService) { }

  /**
   * Lifecycle hook - called after component initialization
   * Loads initial book data and calculates total pages
   */
  ngOnInit(): void {
    this.loadBooks();  // Load books for the first page
    this.totalPages = this.bookService.getTotalPages(this.pageSize);  // Calculate total pages
  }

  /**
   * Adds a book to the shopping cart
   * Shows confirmation message and hides it after 3 seconds
   * @param book - The book to add to the cart
   */
  addToCart(book: Book): void {
    this.cartService.addToCart(book);  // Add book to cart service

    // Show confirmation message
    this.addedBookTitle = book.title;
    this.showCartConfirmation = true;

    // Hide confirmation message after 3 seconds
    setTimeout(() => {
      this.showCartConfirmation = false;
      this.addedBookTitle = '';
    }, 3000);
  }

  /** Search query string for filtering books */
  searchQuery: string = '';

  /**
   * Filters books based on search query
   * Searches both book titles and author names (case-insensitive)
   */
  searchBooks(): void {
    this.books = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  /**
   * Adds a book to the user's wishlist
   * @param book - The book to add to the wishlist
   */
  addToWishlist(book: any) {
    this.wishlistService.addToWishlist(book);
  }

  /**
   * Navigates to a specific page in the catalog
   * @param page - The page number to navigate to
   */
  goToPage(page: number): void {
    this.currentPage = page;  // Update current page
    this.loadBooks();         // Load books for the new page
  }

  /**
   * Navigates to the previous page if available
   */
  previousPage(): void {
    if (this.currentPage > 1) {  // Check if previous page exists
      this.currentPage--;        // Decrease page number
      this.loadBooks();          // Load books for the previous page
    }
  }

  /**
   * Navigates to the next page if available
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {  // Check if next page exists
      this.currentPage++;                      // Increase page number
      this.loadBooks();                        // Load books for the next page
    }
  }

  /**
   * Generates an array of page numbers to display in pagination
   * Shows up to 5 page numbers around the current page
   * @returns Array of page numbers to display
   */
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;  // Maximum number of page buttons to show

    // Calculate start and end page numbers
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we don't have enough pages at the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Generate array of page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  /**
   * Loads books for the current page from the book service
   */
  loadBooks(): void {
    this.books = this.bookService.getBooks(this.currentPage, this.pageSize);
  }
}
