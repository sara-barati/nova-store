# NOVA Store

NOVA Store is a responsive e-commerce web application built with Next.js and TypeScript. It provides a simple shopping experience with product browsing, filtering, sorting, product details, and shopping cart management.

## Features

- Product listing with data fetched from Fake Store API
- Product search by title
- Filter products by category
- Sort products by price, popularity, and rating
- Pagination
- Individual product details pages
- Shopping cart with add, remove, and quantity management
- Persistent shopping cart using Zustand and Local Storage
- Persian and English language support
- RTL and LTR layout support
- Light and dark theme
- Responsive design for different screen sizes

## Tech Stack

- Next.js
- React
- TypeScript
- Styled Components
- Zustand
- Axios
- next-intl
- CSS

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd nova-store
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server          |
| `npm run lint`  | Runs ESLint                           |

## Project Structure

```text
nova-store/
├── app/
│   └── [locale]/
│       ├── cart/
│       ├── products/
│       ├── layout.tsx
│       ├── page.tsx
│       └── providers.tsx
├── api/
├── assets/
├── components/
├── context/
├── dictionary/
├── i18n/
├── lib/
├── modals/
├── public/
│   └── images/
├── requests/
├── shared/
├── storage/
├── types/
├── utils/
├── validations/
├── .env.example
└── package.json
```

## API

Product data is provided by [Fake Store API](https://fakestoreapi.com/).

## Localization

The application supports:

- Persian (fa) — Right-to-Left (RTL)
- English (en) — Left-to-Right (LTR)

The default language is Persian.

## License

This project was developed as a frontend technical assignment.
