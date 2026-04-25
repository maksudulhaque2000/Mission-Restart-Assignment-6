<h1 align="center">SwiftCart - Best Collection For You</h1>

<div align="center">
  <img src="./Assets/preview.png" height="400" width="800" alt="SwiftCart Preview" />
</div>

<div align="center">
  <a href="https://mission-restart-assignment-6.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-View%20Project-0EA5E9?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo Badge" />
  </a>
  <a href="https://github.com/maksudulhaque2000/Mission-Restart-Assignment-6" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="Repository Badge" />
  </a>
</div>

<div align="center">
  <a href="https://maksudul-haque.vercel.app/" target="_blank">Portfolio</a> •
  <a href="https://www.linkedin.com/in/maksudulhaque2000/" target="_blank">LinkedIn</a> •
  <a href="https://www.facebook.com/maksudulhaque2000" target="_blank">Facebook</a> •
  <a href="https://www.youtube.com/@maksudulhaque2000" target="_blank">YouTube</a> •
  <a href="https://github.com/maksudulhaque2000" target="_blank">GitHub</a>
</div>

## Overview

SwiftCart is a modern, responsive e-commerce storefront built with vanilla JavaScript and Tailwind-powered UI components. It uses the Fake Store API to load product data dynamically, lets users browse products by category, view detailed product information, and manage a persistent shopping cart directly in the browser.

The project is designed as a clean single-page shopping experience with a polished layout, responsive sections, and practical cart interactions such as quantity updates, checkout simulation, and local storage persistence.

## Live Links

- Live Project: [https://mission-restart-assignment-6.vercel.app/](https://mission-restart-assignment-6.vercel.app/)
- GitHub Repository: [https://github.com/maksudulhaque2000/Mission-Restart-Assignment-6](https://github.com/maksudulhaque2000/Mission-Restart-Assignment-6)
- Portfolio: [https://maksudul-haque.vercel.app/](https://maksudul-haque.vercel.app/)

## Key Features

- Responsive single-page e-commerce layout with a modern UI.
- Hero section with a branded banner and strong call to action.
- Top rated products section generated from API data.
- Category filters for browsing products by group.
- Product cards with image, price, rating, and quick actions.
- Product details modal with description and rating breakdown.
- Shopping cart sidebar with quantity controls and total calculation.
- Cart state stored in localStorage for persistence across reloads.
- Toast notifications for user feedback and actions.
- Newsletter subscription form with interactive confirmation.
- Mobile-friendly navigation and smooth scroll behavior.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS
- DaisyUI
- Font Awesome
- Fake Store API
- Vercel for deployment

## API Integration

SwiftCart retrieves live product data from the Fake Store API.

### Endpoints Used

- Products: `https://fakestoreapi.com/products`
- Categories: `https://fakestoreapi.com/products/categories`
- Products by Category: `https://fakestoreapi.com/products/category/{category}`
- Single Product Details: `https://fakestoreapi.com/products/{id}`

## Project Structure

```bash
Mission-Restart-Assignment-6/
├── Assets/
│   ├── banner-image.png
│   └── preview.png
├── index.html
├── script.js
├── styles.css
├── vercel.json
└── README.md
```

## How It Works

### 1. Product Loading

When the page loads, the application fetches all products and categories from the Fake Store API. The top-rated section is built by sorting products based on their rating.

### 2. Category Filtering

Users can switch between categories without reloading the page. Selecting a category updates the product grid with matching items.

### 3. Product Details

Each product card includes a details button that opens a modal with a full product description, rating, and add-to-cart action.

### 4. Shopping Cart

Users can add products to the cart, adjust quantities, remove items, clear the cart, and proceed through a simulated checkout flow.

### 5. State Persistence

Cart data is saved in localStorage, so products remain in the cart even after the browser is refreshed.

## Setup and Local Development

This project does not require a build step. You can run it as a static site.

### Prerequisites

- A modern web browser
- A code editor such as VS Code
- Optional: Live Server extension for a smoother local workflow

### Steps

1. Clone the repository.
   ```bash
   git clone https://github.com/maksudulhaque2000/Mission-Restart-Assignment-6.git
   ```
2. Open the project folder in your code editor.
3. Launch `index.html` directly in the browser, or use Live Server in VS Code.
4. Explore the storefront, filter products, and test the cart features.

## Deployment Notes

The project is deployed on Vercel as a static frontend application. The included `vercel.json` file rewrites all routes to the root path so the app works correctly as a single-page experience.

## Customization Ideas

- Replace the Fake Store API with your own backend or product database.
- Add authentication and user accounts.
- Implement a real checkout flow and payment gateway.
- Add wishlist or compare functionality.
- Expand the newsletter form into a real email subscription workflow.

## Author

**Maksudul Haque**

### Connect With Me

- Portfolio: [maksudul-haque.vercel.app](https://maksudul-haque.vercel.app/)
- LinkedIn: [linkedin.com/in/maksudulhaque2000](https://www.linkedin.com/in/maksudulhaque2000/)
- Facebook: [facebook.com/maksudulhaque2000](https://www.facebook.com/maksudulhaque2000)
- YouTube: [youtube.com/@maksudulhaque2000](https://www.youtube.com/@maksudulhaque2000)
- GitHub: [github.com/maksudulhaque2000](https://github.com/maksudulhaque2000)

## License

This project is developed for educational and portfolio purposes. If you want, you can add a specific license later based on your distribution needs.
