# Techora

> **Discover, Upgrade, Connect.**

Techora is a modern tech products e-commerce web application built with React and Tailwind CSS. It provides a complete shopping experience with live product data, authentication, product discovery, filtering, product details, cart management, and checkout UI.

## 🚀 Live Demo

🔗 **(https://techora-c5c06.web.app/)**

## ✨ Features

- 🏠 Modern and responsive homepage
- 🛍️ Live tech product data fetched from DummyJSON API
- 🔐 Google authentication using Clerk
- 🧭 Navigation between Home, Products, About, and Contact pages
- 🎠 Product carousel with live API data
- 🔎 Product search
- 🏷️ Filter products by category and brand
- 💰 Price range filtering
- 🔄 Reset filters
- 📄 Pagination for product listings
- 🧾 Detailed single-product page
- 🛒 Add products to cart
- 📦 Cart management
- 💳 Billing and checkout section
- 📍 Delivery address section
- 🔔 Toast notifications
- ✨ Lottie animations
- 📱 Responsive UI
- 🧩 Reusable React components
- 🌐 Context API for state management
- 🦶 Consistent navbar and footer across pages

## 🖥️ Pages

### 🏠 Home

The homepage features a modern navbar, live product carousel, technology/feature sections, promotional content, and a common footer.

### 🛍️ Products

The products page provides a complete product browsing experience with:

- Category filtering
- Brand filtering
- Price range filtering
- Product search
- Reset filters
- Product cards
- Pagination

### 📦 Single Product

Users can click on any product to view its complete details and add it to the cart.

### 🛒 Cart

The cart page displays selected products along with:

- Cart items
- Product pricing
- Billing details
- Delivery address
- Checkout section

### ℹ️ About

A modern static page describing Techora and its purpose.

### 📞 Contact

A dedicated contact page with a modern and responsive UI.

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### API & State Management

- DummyJSON API
- Axios
- Context API

### Authentication

- Clerk

### Libraries

- React Slick
- React Toastify
- Lottie React
- Lucide React
- React Icons

## 🔌 API

Techora currently uses the DummyJSON Products API to fetch live product information.

**API:** https://dummyjson.com/products

The application retrieves information such as:

- Product images
- Product names
- Descriptions
- Brands
- Categories
- Prices
- Ratings
- Product details

## 🔐 Authentication

Authentication is implemented using Clerk with Google Sign-In.

After signing in, the user's Google profile is displayed in the navbar and the Sign In button is replaced with the user's profile control.

## 📁 Project Structure

```text
Techora/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 📄 License

© 2026 L.K Gupta. All Rights Reserved.

This project is created for educational and portfolio purposes.
The source code, design, and content may not be copied, modified, or redistributed without permission.

---

⭐ If you like this project, feel free to explore the repository and try the live demo.
