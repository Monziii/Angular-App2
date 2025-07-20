/**
 * Book Model Interface
 * Defines the structure for book objects used throughout the ClassicLibrary application
 * This interface represents a classic literature book with all its metadata
 */

export interface Book {
  /** Unique identifier for the book */
  id: number;

  /** Title of the book */
  title: string;

  /** Author of the book */
  author: string;

  /** Price of the book in the local currency */
  price: number;

  /** URL path to the book's cover image */
  imageUrl: string;

  /** Category classification of the book (e.g., Fiction, Non-Fiction) */
  category: string;

  /** Literary genre of the book (e.g., Romance, Mystery, Adventure) */
  genre: string;

  /** Year when the book was first published */
  publicationYear: number;

  /** Brief description or synopsis of the book */
  description: string;

  /** International Standard Book Number for the book */
  isbn: string;
}
