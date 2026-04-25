<h1 align="center">SwiftCart - Modern E-Commerce Demo</h1>

<div align="center">
  <img src="./Assets/preview.png" height="400" width="800" alt="SwiftCart Preview"/>
</div>

</div>

A responsive single-page e-commerce front-end built with HTML, Tailwind CSS + DaisyUI, and vanilla JavaScript. The app consumes real product data from Fake Store API and provides an end-to-end demo shopping flow including browsing, filtering, product details, cart management, and a simulated checkout.

## Table of Contents

1. Project Overview
2. Key Features
3. Tech Stack
4. Architecture and Data Flow
5. Folder Structure
6. Getting Started
7. Deployment
8. API Reference
9. Cart and Persistence Logic
10. UX and UI Notes
11. Known Limitations
12. Future Improvements
13. Acknowledgements

## 1. Project Overview

SwiftCart is designed as a clean, modern storefront experience for learning and demonstration purposes. It focuses on:

- Dynamic product loading from a public API
- Category-based filtering
- Product detail exploration via modal
- Client-side cart functionality with quantity controls
- Persistent cart state with localStorage
- Responsive UI for desktop and mobile devices

This project is a front-end demo. No real payment gateway is integrated.

## 2. Key Features

### Core Experience

- Sticky responsive navigation bar with cart counter badge
- Hero/banner section with call-to-action
- "Why Choose Us" section with service highlights
- Top rated products section (top 3 by API rating)
- Product grid with image, category, pricing, and rating
- Newsletter subscription form (client-side demo interaction)
- Rich footer with quick links and social icons

### Product Discovery

- Loads all categories dynamically from API
- Creates category filter buttons at runtime
- Supports "All Products" and category-specific product views
- Handles loading and error states for product fetch operations

### Product Details

- Opens product details in a modal
- Shows full product description, rating summary, and pricing
- Includes quick actions from modal: Add to Cart / Buy Now

### Cart Functionality

- Add item to cart from product card or modal
- Increase or decrease item quantity
- Remove single items
- Clear all cart items with confirmation
- Real-time cart total and item count calculation
- Slide-in cart sidebar with overlay
- Simulated checkout summary and success feedback

### Feedback and Usability

- Toast notifications for key user actions
- Loading indicators for asynchronous operations
- Smooth scrolling for anchor navigation
- Lazy loading for product images

## 3. Tech Stack

- HTML5
- CSS3 (custom styles)
- Tailwind CSS (CDN)
- DaisyUI (CDN)
- Vanilla JavaScript (ES6+)
- Font Awesome (CDN)
- Fake Store API
- Vercel (deployment configuration via vercel.json)

## 4. Architecture and Data Flow

### Runtime Data Sources

- Product and category data are fetched from Fake Store API endpoints.
- UI is rendered dynamically based on API responses.

### Front-End State

The app manages three primary in-memory states:

- `allProducts`: full product list
- `categories`: category names from API
- `cart`: selected products with quantity

### Initialization Sequence

On `DOMContentLoaded`, the app performs:

1. Load cart state from localStorage
2. Load categories
3. Load top-rated products
4. Load all products
5. Render cart UI

### Persistence

- Cart state is serialized to localStorage key: `swiftcart_cart`
- Saved cart is restored automatically on page refresh

## 5. Folder Structure

```text
Mission-Restart-Assignment-6/
├─ Assets/
│  └─ banner-image.png
├─ index.html
├─ script.js
├─ styles.css
├─ vercel.json
└─ package-lock.json
```

## 6. Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari)
- Internet connection (for CDN assets and API requests)

### Run Locally

Because this is a static front-end project, you can run it directly or through a local server.

Option A: Open directly

1. Open `index.html` in your browser.

Option B: Use a local server (recommended)

```bash
# Python 3
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Alternative local servers are also fine (for example, VS Code Live Server).

## 7. Deployment

The project includes `vercel.json` with a rewrite rule for SPA-style routing:

- All routes rewrite to `/`

Deploy on Vercel as a static site:

1. Import this repository in Vercel
2. Keep default static settings
3. Deploy

No build step is required.

## 8. API Reference

Base API: `https://fakestoreapi.com`

Used endpoints:

- `GET /products` -> fetch all products
- `GET /products/categories` -> fetch all category names
- `GET /products/category/{category}` -> fetch category-specific products
- `GET /products/{id}` -> fetch single product details

## 9. Cart and Persistence Logic

### Cart Item Shape

Each cart entry stores product data and quantity.

- Product metadata from API
- `quantity` field managed by client-side logic

### Price Calculation

Total price is computed using:

- Sum of `item.price * item.quantity` for all cart items

### Quantity Rules

- Increment and decrement controls are provided
- When quantity reaches 0, item is removed from cart

## 10. UX and UI Notes

- Responsive grid scales from single column (mobile) to multi-column (desktop)
- Cart sidebar becomes full width on smaller screens
- Product titles are truncated for layout consistency
- Star visualization is generated from API rating values

## 11. Known Limitations

- Checkout is simulated using browser alert; no real order lifecycle
- No authentication or user account system
- No backend inventory or payment integration
- API dependency means UI availability depends on Fake Store API uptime
- Category filter active-state logic relies on implicit browser `event`; explicit event passing would make it more robust
- A CSS block in `styles.css` (`.truncate-3-lines`) is currently incomplete and should be fixed for valid CSS parsing

## 12. Future Improvements

- Integrate real payment workflow and order confirmation page
- Add search, sorting, and pagination
- Improve accessibility (focus states, ARIA enhancements)
- Add unit/integration tests for cart and data rendering logic
- Introduce modular JavaScript structure or framework migration path
- Add product skeleton placeholders for perceived performance

## 13. Acknowledgements

- Fake Store API for open product data
- Tailwind CSS for utility-first styling
- DaisyUI for component styling primitives
- Font Awesome for iconography

---

This project is intended for educational and demonstration purposes.
