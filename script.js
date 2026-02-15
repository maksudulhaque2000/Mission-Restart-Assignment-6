// SwiftCart E-Commerce JavaScript

// Global Variables
let allProducts = [];
let cart = [];
let categories = [];

// Load cart from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  loadCategories();
  loadTopRatedProducts();
  loadAllProducts();
  updateCartUI();
});

// API Functions

// Fetch all products
async function loadAllProducts() {
  try {
    showLoading("productsContainer");
    const response = await fetch("https://fakestoreapi.com/products");
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error("Error loading products:", error);
    showError(
      "productsContainer",
      "Failed to load products. Please try again later.",
    );
  }
}

// Fetch all categories
async function loadCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
    );
    categories = await response.json();
    displayCategoryFilters();
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// Fetch products by category
async function loadProductsByCategory(category) {
  try {
    showLoading("productsContainer");
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error loading products by category:", error);
    showError(
      "productsContainer",
      "Failed to load products. Please try again later.",
    );
  }
}

// Fetch single product detail
async function loadProductDetail(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    showProductModal(product);
  } catch (error) {
    console.error("Error loading product detail:", error);
    showToast("Failed to load product details", "error");
  }
}

// Load top rated products (top 3)
async function loadTopRatedProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // Sort by rating and get top 3
    const topProducts = products
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 3);

    displayTopRatedProducts(topProducts);
  } catch (error) {
    console.error("Error loading top rated products:", error);
    document.getElementById("topRatedProducts").innerHTML =
      '<p class="col-span-full text-center text-error">Failed to load top products</p>';
  }
}

// Display Functions

// Display category filters
function displayCategoryFilters() {
  const filterContainer = document.getElementById("categoryFilters");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "btn btn-outline btn-primary category-btn";
    button.textContent = capitalizeFirstLetter(category);
    button.onclick = () => filterByCategory(category);
    filterContainer.appendChild(button);
  });
}

// Filter products by category
function filterByCategory(category) {
  // Update active state
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Load products
  if (category === "all") {
    displayProducts(allProducts);
  } else {
    loadProductsByCategory(category);
  }
}

// Display products in grid
function displayProducts(products) {
  const container = document.getElementById("productsContainer");

  if (products.length === 0) {
    container.innerHTML =
      '<p class="col-span-full text-center text-gray-500 text-xl">No products found</p>';
    return;
  }

  container.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");
}

// Display top rated products
function displayTopRatedProducts(products) {
  const container = document.getElementById("topRatedProducts");
  container.innerHTML = products
    .map((product) => createProductCard(product))
    .join("");
}

// Create product card HTML
function createProductCard(product) {
  const truncatedTitle =
    product.title.length > 50
      ? product.title.substring(0, 50) + "..."
      : product.title;

  return `
        <div class="card bg-base-100 shadow-xl product-card">
            <figure class="product-image-container">
                <img src="${product.image}" alt="${product.title}" loading="lazy" />
            </figure>
            <div class="card-body">
                <div class="badge badge-secondary category-badge">${product.category}</div>
                <h3 class="card-title text-lg truncate-2-lines" title="${product.title}">
                    ${truncatedTitle}
                </h3>
                
                <div class="flex items-center justify-between my-2">
                    <span class="price-tag">$${product.price.toFixed(2)}</span>
                    <div class="flex items-center gap-1">
                        ${generateStarRating(product.rating.rate)}
                        <span class="text-sm text-gray-600 ml-1">(${product.rating.count})</span>
                    </div>
                </div>
                
                <div class="card-actions justify-between mt-4">
                    <button class="btn btn-outline btn-primary btn-sm flex-1" onclick="loadProductDetail(${product.id})">
                        <i class="fas fa-info-circle"></i>
                        Details
                    </button>
                    <button class="btn btn-primary btn-sm flex-1" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let stars = "";

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star star filled"></i>';
  }

  // Half star
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt star filled"></i>';
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star star"></i>';
  }

  return `<div class="star-rating">${stars}</div>`;
}

// Modal Functions

// Show product detail modal
function showProductModal(product) {
  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `
        <div class="space-y-4">
            <img src="${product.image}" alt="${product.title}" class="modal-product-image" />
            
            <div class="badge badge-secondary category-badge">${product.category}</div>
            
            <h3 class="text-2xl font-bold">${product.title}</h3>
            
            <div class="flex items-center justify-between">
                <span class="price-tag">$${product.price.toFixed(2)}</span>
                <div class="flex items-center gap-2">
                    ${generateStarRating(product.rating.rate)}
                    <span class="text-sm text-gray-600">(${product.rating.count} reviews)</span>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div>
                <h4 class="font-bold text-lg mb-2">Description</h4>
                <p class="text-gray-700">${product.description}</p>
            </div>
            
            <div class="modal-action">
                <button class="btn btn-primary flex-1" onclick="addToCart(${product.id}); document.getElementById('productModal').close();">
                    <i class="fas fa-cart-plus"></i>
                    Add to Cart
                </button>
                <button class="btn btn-success flex-1" onclick="addToCart(${product.id}); document.getElementById('productModal').close(); toggleCart();">
                    <i class="fas fa-shopping-bag"></i>
                    Buy Now
                </button>
            </div>
        </div>
    `;

  modal.showModal();
}

// Cart Functions

// Add product to cart
function addToCart(productId) {
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    showToast("Product not found", "error");
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
    showToast("Product quantity updated in cart", "success");
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
    showToast("Product added to cart", "success");
  }

  updateCartUI();
  saveCartToStorage();
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  saveCartToStorage();
  showToast("Product removed from cart", "info");
}

// Update product quantity in cart
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
      saveCartToStorage();
    }
  }
}

// Update cart UI
function updateCartUI() {
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <p class="text-gray-500">Your cart is empty</p>
                <p class="text-sm text-gray-400 mt-2">Add some products to get started!</p>
            </div>
        `;
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="flex gap-4">
                    <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-contain" />
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm truncate-2-lines">${item.title}</h4>
                        <p class="text-primary font-bold mt-1">$${item.price.toFixed(2)}</p>
                        
                        <div class="flex items-center justify-between mt-2">
                            <div class="btn-group">
                                <button class="btn btn-sm btn-outline" onclick="updateQuantity(${item.id}, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button class="btn btn-sm btn-outline no-animation">${item.quantity}</button>
                                <button class="btn btn-sm btn-outline" onclick="updateQuantity(${item.id}, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            
                            <button class="btn btn-sm btn-error btn-circle" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Update cart total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Toggle cart sidebar
function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");

  sidebar.classList.toggle("open");
  overlay.classList.toggle("hidden");

  // Prevent body scroll when cart is open
  if (sidebar.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Clear cart
function clearCart() {
  if (cart.length === 0) {
    showToast("Cart is already empty", "info");
    return;
  }

  if (confirm("Are you sure you want to clear the cart?")) {
    cart = [];
    updateCartUI();
    saveCartToStorage();
    showToast("Cart cleared", "info");
  }
}

// Handle checkout
function handleCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty", "error");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  alert(
    `Checkout Summary:\n\nTotal Items: ${itemCount}\nTotal Amount: $${total.toFixed(2)}\n\nThank you for shopping with SwiftCart!\nThis is a demo, no actual payment will be processed.`,
  );

  // Clear cart after checkout
  cart = [];
  updateCartUI();
  saveCartToStorage();
  toggleCart();
  showToast("Order placed successfully!", "success");
}

// LocalStorage Functions

// Save cart to localStorage
function saveCartToStorage() {
  localStorage.setItem("swiftcart_cart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem("swiftcart_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Utility Functions

// Show loading spinner
function showLoading(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
        <div class="col-span-full flex justify-center py-20">
            <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
    `;
}

// Show error message
function showError(containerId, message) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
        <div class="col-span-full text-center py-20">
            <i class="fas fa-exclamation-triangle text-6xl text-error mb-4"></i>
            <p class="text-xl text-error">${message}</p>
        </div>
    `;
}

// Show toast notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";

  const icons = {
    success: "fa-check-circle",
    error: "fa-exclamation-circle",
    info: "fa-info-circle",
  };

  const colors = {
    success: "alert-success",
    error: "alert-error",
    info: "alert-info",
  };

  toast.innerHTML = `
        <div class="alert ${colors[type]}">
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        </div>
    `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Handle newsletter subscription
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;

  showToast(`Thank you for subscribing with ${email}!`, "success");
  event.target.reset();
}

// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});
