# NOVA Store

A responsive bilingual e-commerce web application built with **Next.js and TypeScript** as part of a frontend technical assignment.

NOVA Store provides a modern shopping experience with product discovery, search, filtering, sorting, product details, and shopping cart management. It supports both Persian and English languages, including RTL and LTR layouts, as well as light and dark themes.

## Features

### Product Catalog

- Fetch product data from [Fake Store API](https://fakestoreapi.com/).
- Browse available products.
- Search products by title.
- Filter products by category.
- Sort products by price, popularity, and rating.
- Paginate product listings.
- View detailed information for individual products.

### Shopping Cart

- Add products to the shopping cart.
- Remove products from the cart.
- Increase or decrease product quantities.
- Calculate cart totals dynamically.
- Persist cart data using Zustand and Local Storage.

### User Interface

- Bilingual interface (Persian and English).
- RTL and LTR layout support.
- Light and dark themes.
- Responsive design for desktop, tablet, and mobile.
- Toast notifications for user interactions.
- Reusable and component-based UI architecture.

## Tech Stack

| Technology        | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| Next.js           | React framework, application routing, and rendering |
| React             | Building UI components and managing component state |
| TypeScript        | Static typing and improved code maintainability     |
| Styled Components | Component-based styling and theming                 |
| Zustand           | Client-side state management                        |
| Axios             | Handling HTTP requests                              |
| next-intl         | Internationalization and language management        |
| Lucide React      | Icon library                                        |
| Sonner            | Toast notifications                                 |
| Fake Store API    | External product data source                        |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (20.9 or later)
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd nova-store
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

### Linting

To check the code for linting issues:

```bash
npm run lint
```

## API

Product data is retrieved from the [Fake Store API](https://fakestoreapi.com/).

The application uses the API to retrieve product information, including:

- Product titles
- Prices
- Descriptions
- Categories
- Images
- Ratings

No API key is required.

## Internationalization

NOVA Store supports two languages:

- **English (en):** Left-to-right (LTR)
- **Persian (fa):** Right-to-left (RTL)

Language management and translations are handled using `next-intl`.

## State Management

Zustand is used to manage client-side application state, particularly shopping cart data.

Cart information is persisted in Local Storage so that the shopping cart remains available after refreshing the page.

## Themes

The application supports both light and dark themes, allowing users to switch between different visual modes.

## License

This project was developed as part of a frontend technical assignment.
