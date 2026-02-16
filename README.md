# SwiftCart E-Commerce 🛍️

A fully functional and responsive e-commerce website built with vanilla HTML, CSS (Tailwind CSS + DaisyUI), and JavaScript. This project fetches real product data from the Fake Store API and provides a complete shopping experience.

## 🌟 Live Demo

**Live Link:** [https://mission-restart-assignment-6.vercel.app/]

**GitHub Repository:** [https://github.com/maksudulhaque2000/Mission-Restart-Assignment-6]

## 🚀 Answer The Questions

---

### ১. What is the difference between null and undefined?

* **Undefined:** যখন আমি কোনো ভেরিয়েবল ডিক্লেয়ার করি কিন্তু তাতে কোনো মান (Value) দিই না, তখন জাভাস্ক্রিপ্ট নিজে থেকেই ওটাকে `undefined` বলে দেয়।
* **Null:** এটি আমি নিজে থেকে ব্যবহার করি। যখন আমি বোঝাতে চাই যে এই ভেরিয়েবলটি এখন ইচ্ছাকৃতভাবে খালি রাখা হয়েছে বা এর কোনো মান নেই, তখন আমি সেখানে `null` বসিয়ে দিই। 

---

### ২. What is the use of the map() function in JavaScript? How is it different from forEach()?

**Map() ফাংশন:** এটি একটি অ্যারের প্রতিটি উপাদানের ওপর কাজ করে এবং শেষে নতুন একটি অ্যারে রিটার্ন (Return) করে। এটি মেইন অ্যারেকে পরিবর্তন করে না।

**পার্থক্য:**
* **map():** কাজ শেষ করে সবসময় একটি নতুন অ্যারে দেয়। ডাটা মডিফাই করে নতুন কিছু বানাতে এটি সেরা।
* **forEach():** এটি শুধু লুপ চালিয়ে অ্যারের উপাদানগুলো দিয়ে কাজ করে, কিন্তু এটি কোনো কিছু রিটার্ন করে না।

---

### ৩. What is the difference between == and ===?

* **== (Loose Equality):** এটি শুধু মান (Value) সমান কি না তা দেখে। এটি ডাটা টাইপ চেক করে না।
* **=== (Strict Equality):** এটি মান এবং ডাটা টাইপ—দুটোই চেক করে।

---

### ৪. What is the significance of async/await in fetching API data?

সার্ভার বা API থেকে ডাটা আসতে সাধারণত কিছুটা সময় লাগে। 
* **Async/Await** ব্যবহার করলে জাভাস্ক্রিপ্ট সেই ডাটা না আসা পর্যন্ত অপেক্ষা করে। এতে কোড লেখা এবং পড়া অনেক সহজ হয়ে যায়।
* এটি ছাড়া কোড লিখলে অনেক সময় এলোমেলো হয়ে যায়। এর মাধ্যমে `try/catch` ব্যবহার করে এরর হ্যান্ডেল করাও অনেক সহজ।

---

### ৫. Explain the concept of Scope in JavaScript (Global, Function, Block).

স্কোপ মানে হলো একটি ভেরিয়েবল আমি কোডের ঠিক কোন কোন জায়গায় ব্যবহার করতে পারব।

* **Global Scope:** ভেরিয়েবলটি যদি কোনো ফাংশনের বাইরে থাকে, তবে কোডের যেকোনো জায়গা থেকে ওটা ব্যবহার করা যায়।
* **Function Scope:** একটি ফাংশনের ভেতর লেখা ভেরিয়েবল শুধু ওই ফাংশনের ভেতরেই কাজ করবে, বাইরে থেকে ওটা কল করা যাবে না।
* **Block Scope:** `let` এবং `const` দিয়ে যদি কোনো কার্লি ব্রেস `{ }` এর ভেতর ভেরিয়েবল লিখি, তবে তা শুধু ওই ব্র্যাকেটের ভেতরেই থাকবে।

---

## ✨ Features Implemented

### Core Features
- ✅ **Responsive Navbar** with logo, menu items, and cart icon with item count
- ✅ **Hero/Banner Section** with background image and call-to-action button
- ✅ **Why Choose Us Section** with 4 feature cards (Fast Delivery, 24/7 Support, Secure Payment, Easy Returns)
- ✅ **Top Rated Products Section** displaying 3 highest-rated products
- ✅ **Newsletter Subscription Form** with email validation
- ✅ **Professional Footer** with quick links and social media icons
- ✅ **Fully Mobile Responsive** design

### Dynamic Functionality
- ✅ **Dynamic Category Loading** - Categories fetched from API and displayed as filter buttons
- ✅ **Category-based Product Filtering** - Click on any category to filter products
- ✅ **Product Cards** with:
  - Product image
  - Truncated title
  - Price display
  - Category badge
  - Star rating visualization
  - Review count
  - Details button
  - Add to Cart button
- ✅ **Product Detail Modal** - Opens on clicking "Details" button with full product information

### Advanced Features (Challenges Completed)
- ✅ **Add to Cart System** - Click to add products with quantity management
- ✅ **Cart Count Badge** - Real-time update in navbar
- ✅ **Cart Sidebar** - Sliding sidebar showing cart items
- ✅ **Quantity Management** - Increase/decrease product quantity in cart
- ✅ **Remove from Cart** - Delete individual items
- ✅ **Cart Total Calculation** - Automatically calculates total price
- ✅ **LocalStorage Persistence** - Cart data saved across browser sessions
- ✅ **Loading Spinners** - Beautiful loading animations while fetching data
- ✅ **Active State Indicators** - Highlighted selected category button
- ✅ **Toast Notifications** - User-friendly success/error messages
- ✅ **Smooth Animations** - Hover effects and transitions throughout

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with animations
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **Vanilla JavaScript** - ES6+ features
- **Font Awesome** - Icon library
- **Fake Store API** - Product data source

## 📁 Project Structure

```
Mission Restart A6/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── QUESTIONS.md        # JavaScript Q&A answers in Bangla
├── Assets/
│   └── banner-image.png
└── reference-design/
    ├── home-page-desktop-view.png
    ├── all-products-desktop-view.png
    ├── mobile-view-homepage.png
    └── mobile-view-products-page.png
```

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone [https://github.com/maksudulhaque2000/Mission-Restart-Assignment-6]
```

2. Navigate to the project directory:
```bash
cd "Mission Restart A6"
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server Extension
Right-click on index.html and select "Open with Live Server"
```

4. Open your browser and visit:
```
http://localhost:8000
```

## 🎯 API Endpoints Used

- **All Products:** `https://fakestoreapi.com/products`
- **All Categories:** `https://fakestoreapi.com/products/categories`
- **Products by Category:** `https://fakestoreapi.com/products/category/{category}`
- **Single Product:** `https://fakestoreapi.com/products/{id}`

## ✅ Assignment Requirements Checklist

### UI/UX Specifications
- [x] Navbar with logo, menu items, and cart icon
- [x] Banner/Hero section with image and CTA
- [x] Features/Why Choose Us section (4 items)
- [x] Top Rated Products section (3 products)
- [x] Newsletter subscription form
- [x] Footer with links and social icons
- [x] Mobile responsive design

### Dynamic Features
- [x] Category loading and display
- [x] Category-based product filtering
- [x] Product cards with all required information
- [x] Product detail modal
- [x] Add to Cart functionality
- [x] Cart calculation
- [x] Remove from cart
- [x] Loading spinner
- [x] Active state for categories

### Code Quality
- [x] Clean and readable code
- [x] Proper comments
- [x] No dummy text where real data can be shown
- [x] At least 5 meaningful commits
- [x] JavaScript questions answered in Bangla

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Key Features Highlights

### Smart Cart Management
- Products persist in cart even after page refresh
- Quantity can be adjusted directly in cart
- Real-time total price calculation
- Visual feedback with toast notifications

### Enhanced User Experience
- Smooth scroll navigation
- Loading states for all async operations
- Hover effects on interactive elements
- Modal for detailed product view
- Category filtering with active states

### Performance Optimizations
- Lazy loading for product images
- Efficient state management
- LocalStorage for data persistence
- Minimal API calls

## 🐛 Known Issues

None - All features are working as expected! 🎉

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

## 📄 License

This project is created for educational purposes as part of Programming Hero's Web Development Course.

## 👨‍💻 Author

**Maksudul Haque**

---

**Note:** This is a demo e-commerce website. No real transactions are processed. The checkout functionality is simulated for demonstration purposes only.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for the beautiful component library
- [Font Awesome](https://fontawesome.com/) for the icon library
- Programming Hero for the assignment guidelines

---
