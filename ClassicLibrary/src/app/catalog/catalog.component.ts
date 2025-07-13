import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css'],
    standalone: false
})
export class CatalogComponent implements OnInit {
  books: Book[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 0;

  constructor(private bookService: BookService, private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.loadBooks();
    this.totalPages = this.bookService.getTotalPages(this.pageSize);
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }

  searchQuery: string = '';

  searchBooks(): void {
    this.books = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToWishlist(book: any) {
    this.wishlistService.addToWishlist(book);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadBooks();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadBooks();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadBooks();
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  loadBooks(): void {
    this.books = this.bookService.getBooks(this.currentPage, this.pageSize);
  }
}
