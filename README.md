<div align="center">

# 🛒 E-Commerce Gaming Store

### Modern front-end shopping experience for gaming PCs, laptops, monitors and peripherals

<p>
  A responsive e-commerce website built with <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, featuring product categories, promotions and a persistent shopping cart.
</p>

<p>
  <a href="https://e-commerce-pi-blond.vercel.app">
    <img src="https://img.shields.io/badge/Live_Demo-Visit_Store-22C55E?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<p>
  <img src="https://img.shields.io/badge/Responsive_UI-✓-0EA5E9?style=flat-square" alt="Responsive UI" />
  <img src="https://img.shields.io/badge/Shopping_Cart-localStorage-7C3AED?style=flat-square" alt="Shopping Cart" />
  <img src="https://img.shields.io/badge/Products-Gaming-DC2626?style=flat-square" alt="Gaming Products" />
  <img src="https://img.shields.io/badge/Status-Completed-16A34A?style=flat-square" alt="Completed" />
</p>

</div>

---

## ✨ Overview

**E-Commerce Gaming Store** is a front-end shopping project focused on gaming and technology products.

The website provides a clean storefront where visitors can browse gaming PCs, laptops, monitors and peripherals, explore new products and discounted items, and manage products inside a JavaScript-powered shopping cart.

The project was built to practice modern front-end fundamentals while creating a complete multi-page shopping experience.

---

## 🚀 Live Demo

<div align="center">

### 🌐 [Open the E-Commerce Website](https://e-commerce-pi-blond.vercel.app)

</div>

---

## 🧩 Features

| Feature | Description | Status |
|---|---|:---:|
| 🏠 Home page | Hero section and best-selling products | ✅ |
| 🆕 New products | Dedicated `Nouveaute` page | ✅ |
| 🎮 Peripherals | Dedicated peripherals catalogue | ✅ |
| 🏷️ Sales | Discounted-product page | ✅ |
| 🛒 Shopping cart | Add, remove and update item quantities | ✅ |
| 💾 Persistent cart | Cart stored with `localStorage` | ✅ |
| 💰 Dynamic total | Automatic cart total calculation | ✅ |
| 🔔 Notifications | Visual feedback when products are added | ✅ |
| 👤 Login UI | Dedicated connection page | ✅ |
| 📝 Registration UI | Dedicated registration page | ✅ |
| 📱 Responsive design | Layout adapted for different screen sizes | ✅ |

---

## 🛍️ Shopping Experience

The home page presents a gaming-focused catalogue with products such as PCs, laptops, monitors and accessories.

```text
Visitor
   │
   ├── Browse products
   │      ├── Home
   │      ├── New products
   │      ├── Peripherals
   │      └── Sales
   │
   └── Shopping Cart
          ├── Add product
          ├── Increase quantity
          ├── Decrease quantity
          ├── Remove product
          ├── Calculate total
          └── Save cart in localStorage
```

The cart remains available after a page reload because its state is persisted locally in the browser.

---

## 🧠 JavaScript Cart System

The project contains a dedicated `Panier` class responsible for cart behaviour.

### Main responsibilities

```javascript
addItem(product)
removeItem(productId)
updateQuantity(productId, newQuantity)
clearCart()
getTotal()
getTotalItems()
updateCartCount()
updateCartDisplay()
```

The cart uses:

```javascript
localStorage.setItem('shopify_cart', JSON.stringify(this.items));
```

to keep the user's selected products between sessions.

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic content |
| **CSS3** | Layout, styling, animations and responsive design |
| **JavaScript** | Shopping cart and interactive behaviour |
| **LocalStorage** | Persistent client-side cart state |
| **Font Awesome** | Interface icons |
| **Vercel** | Website deployment |

</div>

---

## 📁 Project Structure

```text
E-commerce/
│
├── Dossier CSS/
│   ├── style.css
│   ├── insri.css
│   └── backround/
│
├── Dossier JS/
│   └── panier.js
│
├── image/
├── image_accessoire/
├── image_nouveautè/
├── image_solde/
│
├── index.html
├── Nouveaute.html
├── Peripherique.html
├── solde.html
├── connexion.html
├── Inscription.html
│
├── assets/
│   ├── profile.jpg
│   └── profile-v2.jpg
│
└── README.md
```

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/admoujta/E-commerce.git
cd E-commerce
```

Then open:

```text
index.html
```

For a better development workflow, you can also run the project with a local development server such as **Live Server** in VS Code.

---

## 📚 What I Practiced

This project helped me strengthen my understanding of:

```text
HTML Structure
      ↓
CSS Layout & Styling
      ↓
Responsive Design
      ↓
DOM Manipulation
      ↓
JavaScript Classes
      ↓
Events
      ↓
LocalStorage
      ↓
Shopping Cart Logic
```

It also gave me practical experience organizing a multi-page website and connecting product cards to a reusable cart system.

---

## 🔮 Possible Improvements

Future versions could include:

- backend API and database
- real user authentication
- product search and filtering
- payment integration
- order history
- admin dashboard
- product management
- favorites / wishlist
- improved accessibility
- automated tests

---

## 👨‍💻 Author

<div align="center">

<img src="assets/profile-v2.jpg" width="220" alt="Adam Moujtahid" />

### Adam Moujtahid

**Computer Engineering & Networks Student**  
Software Engineering · Big Data · Artificial Intelligence

<p>
  <a href="https://github.com/admoujta">
    <img src="https://img.shields.io/badge/GitHub-admoujta-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://e-commerce-pi-blond.vercel.app">
    <img src="https://img.shields.io/badge/Live_Project-E--Commerce-22C55E?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Project" />
  </a>
</p>

---

**Designed and developed as a practical front-end e-commerce project.** 🛒✨

</div>
