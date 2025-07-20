# ClassicLibrary - Classic Literature E-commerce Application

A modern Angular e-commerce application for classic literature books, featuring a beautiful UI and comprehensive functionality.

## 🚀 Features

### 📚 Book Catalog

- Browse a curated collection of classic literature books
- Pagination for easy navigation through large catalogs
- Search functionality by book title and author
- Detailed book information including price, genre, and publication year

### 🛒 Shopping Cart

- Add books to cart with quantity management
- Persistent cart data using localStorage
- Real-time cart updates with confirmation messages
- Total price calculation and item count display

### ❤️ Wishlist

- Save books for later purchase
- Move items from wishlist to cart
- Add all wishlist items to cart at once
- Persistent wishlist data

### 👤 User Authentication

- User registration with form validation
- Login functionality with error handling
- Session management using localStorage
- Protected routes and user state management

### 💳 Checkout Process

- Comprehensive checkout form with validation
- Shipping information collection
- Payment details with format validation
- Order completion with success feedback

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 19.2.14
- **Language**: TypeScript 5.5.4
- **Styling**: Bootstrap 5 + Custom CSS
- **State Management**: RxJS BehaviorSubject
- **Data Persistence**: localStorage
- **Build Tool**: Angular CLI 19.2.15

## 📁 Project Structure

```
ClassicLibrary/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── catalog/          # Book catalog display
│   │   │   ├── cart/             # Shopping cart management
│   │   │   ├── checkout/         # Purchase completion
│   │   │   ├── login/            # User authentication
│   │   │   ├── register/         # User registration
│   │   │   └── wishlist/         # Wishlist management
│   │   ├── models/
│   │   │   └── book.model.ts     # Book interface definition
│   │   ├── services/
│   │   │   ├── auth.service.ts   # Authentication logic
│   │   │   ├── book.service.ts   # Book data management
│   │   │   ├── cart.service.ts   # Shopping cart operations
│   │   │   └── wishlist.service.ts # Wishlist operations
│   │   ├── app.component.ts      # Root component
│   │   └── app.module.ts         # Main application module
│   ├── assets/
│   │   └── images/               # Book cover images
│   └── styles.css                # Global styles
├── angular.json                  # Angular configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Monziii/Angular-App2.git
   cd Angular-App2/ClassicLibrary
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

## 📖 Usage Guide

### Browsing Books

1. Navigate to the catalog page
2. Use pagination to browse through books
3. Search for specific books using the search bar
4. Click on book cards to view details

### Adding to Cart

1. Click "Add to Cart" on any book
2. A confirmation message will appear
3. View your cart by clicking the cart icon in the navigation
4. Modify quantities or remove items as needed

### Managing Wishlist

1. Click "Wishlist" on any book to save it
2. Access your wishlist from the navigation menu
3. Move items to cart or remove them from wishlist

### User Registration & Login

1. Click "Register" to create a new account
2. Fill in the required information
3. Use your credentials to log in
4. Access personalized features

### Checkout Process

1. Add items to your cart
2. Navigate to the checkout page
3. Fill in shipping and payment information
4. Complete your purchase

## 🔧 Key Features Implementation

### Cart Persistence

- Uses localStorage to persist cart data
- Automatic cart updates across components
- Real-time cart count display in navigation

### Form Validation

- Reactive forms with comprehensive validation
- Custom validators for password confirmation
- Real-time validation feedback

### Responsive Design

- Bootstrap-based responsive layout
- Mobile-friendly interface
- Consistent styling across all components

### Error Handling

- User-friendly error messages
- Form validation feedback
- Graceful error recovery

## 🎨 UI/UX Features

- **Classic Literature Theme**: Elegant design inspired by classic books
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Interactive Elements**: Hover effects and smooth transitions
- **User Feedback**: Confirmation messages and loading states
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📝 Code Quality

- **Comprehensive Documentation**: JSDoc comments for all functions
- **TypeScript**: Strong typing throughout the application
- **Component Architecture**: Modular and reusable components
- **Service Layer**: Clean separation of business logic
- **Error Handling**: Proper error management and user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mina Nessim**

- GitHub: [@Monziii](https://github.com/Monziii)

## 🙏 Acknowledgments

- Classic literature authors and their timeless works
- Angular team for the excellent framework
- Bootstrap team for the responsive CSS framework
- The open-source community for inspiration and tools

---

**ClassicLibrary** - Where timeless literature meets modern technology 📚✨
