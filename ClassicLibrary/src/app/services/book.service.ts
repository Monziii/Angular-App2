import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 24.99,
      imageUrl: 'assets/images/pride_and_prejudice.jpg',
      category: 'Romance',
      genre: 'Classic Romance',
      publicationYear: 1813,
      description: 'A classic romance novel about the relationship between Elizabeth Bennet and Mr. Darcy in Georgian-era England.',
      isbn: '978-0141439518'
    },
    {
      id: 2,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      price: 22.99,
      imageUrl: 'assets/images/jane_eyre.jpg',
      category: 'Gothic Romance',
      genre: 'Victorian Literature',
      publicationYear: 1847,
      description: 'A gothic romance novel about the mysterious relationship between Jane Eyre and Mr. Rochester.',
      isbn: '978-0141441146'
    },
    {
      id: 3,
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      price: 21.99,
      imageUrl: 'assets/images/wuthering_heights.jpg',
      category: 'Gothic Romance',
      genre: 'Victorian Literature',
      publicationYear: 1847,
      description: 'A passionate and tragic love story set in the wild Yorkshire moors.',
      isbn: '978-0141439556'
    },
    {
      id: 4,
      title: 'Great Expectations',
      author: 'Charles Dickens',
      price: 26.99,
      imageUrl: 'assets/images/great_expectations.jpg',
      category: 'Coming of Age',
      genre: 'Victorian Literature',
      publicationYear: 1861,
      description: 'A bildungsroman about Pip, an orphan who dreams of becoming a gentleman.',
      isbn: '978-0141439563'
    },
    {
      id: 5,
      title: 'Oliver Twist',
      author: 'Charles Dickens',
      price: 23.99,
      imageUrl: 'assets/images/oliver_twist.jpg',
      category: 'Social Criticism',
      genre: 'Victorian Literature',
      publicationYear: 1838,
      description: 'A social novel about an orphan boy who faces the harsh realities of Victorian London.',
      isbn: '978-0141439747'
    },
    {
      id: 6,
      title: 'David Copperfield',
      author: 'Charles Dickens',
      price: 28.99,
      imageUrl: 'assets/images/david_copperfield.jpg',
      category: 'Autobiographical Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1850,
      description: 'Dickens\' most autobiographical novel, following David from childhood to maturity.',
      isbn: '978-0141439167'
    },
    {
      id: 7,
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      price: 25.99,
      imageUrl: 'assets/images/tale_of_two_cities.jpg',
      category: 'Historical Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1859,
      description: 'A historical novel set during the French Revolution, exploring themes of sacrifice and redemption.',
      isbn: '978-0141439600'
    },
    {
      id: 8,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      price: 20.99,
      imageUrl: 'assets/images/picture_of_dorian_gray.jpg',
      category: 'Gothic Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1890,
      description: 'A philosophical novel about beauty, youth, and the consequences of vanity.',
      isbn: '978-0141439570'
    },
    {
      id: 9,
      title: 'The Importance of Being Earnest',
      author: 'Oscar Wilde',
      price: 18.99,
      imageUrl: 'assets/images/importance_of_being_earnest.jpg',
      category: 'Comedy',
      genre: 'Victorian Literature',
      publicationYear: 1895,
      description: 'A witty comedy of manners about mistaken identities and social conventions.',
      isbn: '978-0141439006'
    },
    {
      id: 10,
      title: 'Frankenstein',
      author: 'Mary Shelley',
      price: 22.99,
      imageUrl: 'assets/images/frankenstein.jpg',
      category: 'Gothic Fiction',
      genre: 'Romantic Literature',
      publicationYear: 1818,
      description: 'A groundbreaking science fiction novel about the consequences of playing God.',
      isbn: '978-0141439471'
    },
    {
      id: 11,
      title: 'Dracula',
      author: 'Bram Stoker',
      price: 24.99,
      imageUrl: 'assets/images/dracula.jpg',
      category: 'Gothic Horror',
      genre: 'Victorian Literature',
      publicationYear: 1897,
      description: 'The definitive vampire novel that established the modern vampire myth.',
      isbn: '978-0141439846'
    },
    {
      id: 12,
      title: 'The Strange Case of Dr Jekyll and Mr Hyde',
      author: 'Robert Louis Stevenson',
      price: 19.99,
      imageUrl: 'assets/images/jekyll_and_hyde.jpg',
      category: 'Gothic Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1886,
      description: 'A psychological thriller about the duality of human nature.',
      isbn: '978-0141439730'
    },
    {
      id: 13,
      title: 'Treasure Island',
      author: 'Robert Louis Stevenson',
      price: 21.99,
      imageUrl: 'assets/images/treasure_island.jpg',
      category: 'Adventure',
      genre: 'Victorian Literature',
      publicationYear: 1883,
      description: 'A classic adventure novel about pirates, treasure maps, and high seas adventure.',
      isbn: '978-0141439754'
    },
    {
      id: 14,
      title: 'Kidnapped',
      author: 'Robert Louis Stevenson',
      price: 20.99,
      imageUrl: 'assets/images/kidnapped.jpg',
      category: 'Adventure',
      genre: 'Victorian Literature',
      publicationYear: 1886,
      description: 'A historical adventure novel set in 18th-century Scotland.',
      isbn: '978-0141439761'
    },
    {
      id: 15,
      title: 'The Time Machine',
      author: 'H.G. Wells',
      price: 18.99,
      imageUrl: 'assets/images/time_machine.jpg',
      category: 'Science Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1895,
      description: 'A pioneering science fiction novel about time travel and the future of humanity.',
      isbn: '978-0141439976'
    },
    {
      id: 16,
      title: 'The War of the Worlds',
      author: 'H.G. Wells',
      price: 20.99,
      imageUrl: 'assets/images/war_of_the_worlds.jpg',
      category: 'Science Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1898,
      description: 'A science fiction novel about a Martian invasion of Earth.',
      isbn: '978-0141439983'
    },
    {
      id: 17,
      title: 'The Invisible Man',
      author: 'H.G. Wells',
      price: 19.99,
      imageUrl: 'assets/images/the_invisible_man.jpg',
      category: 'Science Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1897,
      description: 'A science fiction novel about a scientist who discovers the secret of invisibility.',
      isbn: '978-0141439990'
    },
    {
      id: 18,
      title: 'The Island of Dr Moreau',
      author: 'H.G. Wells',
      price: 17.99,
      imageUrl: 'assets/images/the_island_of_dr_moreau.jpg',
      category: 'Science Fiction',
      genre: 'Victorian Literature',
      publicationYear: 1896,
      description: 'A science fiction novel about a mad scientist who creates human-animal hybrids.',
      isbn: '978-0141440002'
    },
    {
      id: 19,
      title: 'The Call of the Wild',
      author: 'Jack London',
      price: 16.99,
      imageUrl: 'assets/images/the_call_of_the_wild.jpg',
      category: 'Adventure',
      genre: 'American Literature',
      publicationYear: 1903,
      description: 'A novel about a domesticated dog who returns to the wild during the Klondike Gold Rush.',
      isbn: '978-0141321059'
    },
    {
      id: 20,
      title: 'White Fang',
      author: 'Jack London',
      price: 17.99,
      imageUrl: 'assets/images/white_fang.jpg',
      category: 'Adventure',
      genre: 'American Literature',
      publicationYear: 1906,
      description: 'A novel about a wild wolfdog who learns to trust humans.',
      isbn: '978-0141321066'
    },
    {
      id: 21,
      title: 'The Scarlet Letter',
      author: 'Nathaniel Hawthorne',
      price: 21.99,
      imageUrl: 'assets/images/the_scarlet_letter.jpg',
      category: 'Historical Fiction',
      genre: 'American Literature',
      publicationYear: 1850,
      description: 'A novel about sin, guilt, and redemption in Puritan New England.',
      isbn: '978-0142437261'
    },
    {
      id: 22,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      price: 29.99,
      imageUrl: 'assets/images/moby_dick.jpg',
      category: 'Adventure',
      genre: 'American Literature',
      publicationYear: 1851,
      description: 'An epic novel about Captain Ahab\'s obsessive quest to hunt the white whale.',
      isbn: '978-0142437247'
    },
    {
      id: 23,
      title: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
      price: 18.99,
      imageUrl: 'assets/images/the_adventures_of_tom_sawyer.jpg',
      category: 'Coming of Age',
      genre: 'American Literature',
      publicationYear: 1876,
      description: 'A novel about the mischievous adventures of a young boy in the American South.',
      isbn: '978-0141321097'
    },
    {
      id: 24,
      title: 'Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      price: 20.99,
      imageUrl: 'assets/images/adventures_of_huckleberry_finn.jpg',
      category: 'Coming of Age',
      genre: 'American Literature',
      publicationYear: 1885,
      description: 'A novel about a boy and a runaway slave\'s journey down the Mississippi River.',
      isbn: '978-0141321103'
    },
    {
      id: 25,
      title: 'Little Women',
      author: 'Louisa May Alcott',
      price: 22.99,
      imageUrl: 'assets/images/little_women.jpg',
      category: 'Coming of Age',
      genre: 'American Literature',
      publicationYear: 1868,
      description: 'A novel about four sisters growing up in Civil War-era America.',
      isbn: '978-0141321080'
    }
  ];

  getBooks(page: number, pageSize: number): Book[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.books.slice(startIndex, endIndex);
  }

  getTotalPages(pageSize: number): number {
    return Math.ceil(this.books.length / pageSize);
  }

  getBooksByCategory(category: string): Book[] {
    return this.books.filter(book => book.category === category);
  }

  getBooksByGenre(genre: string): Book[] {
    return this.books.filter(book => book.genre === genre);
  }

  getBooksByAuthor(author: string): Book[] {
    return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }
}
