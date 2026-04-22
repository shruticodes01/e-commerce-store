# e-commerce-store

E-commerce website built with React and TypeScript. Styled with tailwindCSS.

## Table of contents

- [Project Highlights](#project-highlights)
  - [Features](#features) -[Tech Stack](#tech-stack)
  - [Links](#links)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API](#api)

## Project Highlights

### Features

- API integration using DummyJSON and Error handling
- Implementing search, filter and sort functionality
- Showing product details with View Details button
- State management of Favorites using Context API, enabling add and remove from favorites functionality
- State management of Cart using Context API enabling add, delete, increase and decarease functionality
- Persiting Cart and Favorite items with localstorage
- Managing Cart, Checkout, and Product Details Modal visibility based on user's progress
- Responsive UI built using Tailwind CSS and CSS
- Semantic HTML and mobile-first workflow
- Changing styles for header on scroll

### Tech Stack

- React
- TypeScript
- CSS and Tailwind CSS
- React Router (v6)
- Node.js
- npm package manager

### Links

- Solution URL: [Git](https://github.com/shruticodes01/e-commerce-store.git)

## Project Structure

```tree
│
├───assets
│   │   logo_bg_black.png
│   │   logo_bg_mint.png
│   │   logo_transparent.png
│   │
│   └───banner
│           fragrance_banner.jpg
│           furniture_banner.jpg
│           grocery_banner.jpg
│           home_banner.jpg
│           makeup_banner.jpg
│
├───components
│   │   CategoryPage.tsx
│   │   Checkout.tsx
│   │   Rating.tsx
│   │   SearchProducts.tsx
│   │   SortProducts.tsx
│   │
│   ├───Cart
│   │       Cart.tsx
│   │       CartItem.tsx
│   │
│   ├───Footer
│   │       Footer.tsx
│   │
│   ├───Header
│   │       DesktopHeader.tsx
│   │       Header.tsx
│   │       MobileHeader.tsx
│   │
│   ├───Product
│   │       ProductCard.tsx
│   │       ProductDetails.tsx
│   │       ProductList.tsx
│   │
│   └───UI
│           Button.tsx
│           Input.tsx
│           Modal.tsx
│
├───context
│   ├───Cart
│   │       CartContext.tsx
│   │       useCart.ts
│   │
│   ├───Products
│   │       ProductsContext.tsx
│   │       useProducts.ts
│   │
│   └───UserProgress
│           UserProgressContext.tsx
│           useUserProgress.ts
│
├───layouts
│       Container.tsx
│       MainLayout.tsx
│
├───pages
│   ├───Beauty
│   │       Beauty.tsx
│   │
│   ├───Favorites
│   │       FavoriteProducts.tsx
│   │
│   ├───Fragrances
│   │       Fragrances.tsx
│   │
│   ├───Furniture
│   │       Furniture.tsx
│   │
│   ├───Groceries
│   │       Groceries.tsx
│   │
│   └───Home
│           Home.tsx
│
├───routes
│       RouterRoutes.tsx
│
├───styles
│       global.ts
│
├───types
│       types.ts
│
└───utils
        calcOriginalPrice.ts
        formatting.ts
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/shruticodes01/e-commerce-store.git
cd e-commerce-store
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## API

DummyJSON: [DummyJSON](https://dummyjson.com/products)
