# 🛒 ShopNest – Modern E-commerce Frontend with Next.js 15

**ShopNest** is a sleek, responsive, and SEO-optimized e-commerce frontend built with **Next.js 15**, **Tailwind CSS**, **Redux Toolkit**, and **Clerk authentication**. It delivers a fast, user-friendly shopping experience with reusable UI components, shopping cart functionality, authentication, and dynamic page rendering — all designed for modern web performance.

🔗 **Live Repo:** [https://github.com/istiakiraz/ShopNest-task](https://github.com/istiakiraz/ShopNest-task)

---

## ✨ Features

- 🔐 User Authentication with Clerk
- 🛒 Add to Cart with Redux Toolkit
- 🌓 Light & Dark Mode (Next Themes)
- 🧱 Reusable UI Components (Radix UI)
- 🎡 Product Carousel (Embla Carousel)
- ✅ SEO Optimization with Metadata APIs
- 🧾 Skeleton Loaders for smooth UX
- 🚀 Lightning-fast Next.js 15 App Router

---

## 🛠️ Getting Started (First Setup Guide)

### 1. Clone the Repository

```bash
git clone https://github.com/istiakiraz/ShopNest-task
cd ShopNest-task

### Install Dependencies

npm install

```
---

## Clerk key

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YWN0dWFsLXplYnJhLTI2LmNsZXJrLmFjY291bnRzLmRldiQ
- CLERK_SECRET_KEY=sk_test_ywhbqALpIpJUT3FvLvrlatu5WXxNfCned9cFBx1I0u

- NEXT_PUBLIC_CLERK_SIGN-IN-URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN-UP-URL=/sign-up

---


 ### 🧠 Logic Overview


🔐 Authentication
Integrated with Clerk

Handles user registration, login, session

Middleware to protect pages

---

🛒 Cart System
Built using Redux Toolkit

Cart state includes: items, totalQuantity, totalPrice

Actions: addItem, removeItem, clearCart

---

🎨 UI/UX
Radix UI for accessible tabs, dialogs, scroll areas

Embla Carousel for sliding banners or product sliders

Lucide React for icons

Sonner for toast notifications

React Hook Form for user-friendly forms

Skeleton Loading for improving perceived speed

---

📈 SEO Techniques Used
ShopNest is built with SEO in mind using Next.js App Router best practices:

✅ metadata for Static SEO

✅ generateStaticParams() for static generation of dynamic product pages

✅ generateMetadata() for dynamic meta tags (product-specific)

✅ Semantic HTML, image optimization, and accessibility

---
### Packages Used

{
  "@clerk/nextjs": "^6.28.1",
  "@radix-ui/react-avatar": "^1.1.10",
  "@radix-ui/react-dialog": "^1.1.14",
  "@radix-ui/react-scroll-area": "^1.2.9",
  "@radix-ui/react-slot": "^1.2.3",
  "@radix-ui/react-tabs": "^1.1.12",
  "@reduxjs/toolkit": "^2.8.2",
  "react-redux": "^9.2.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "embla-carousel-react": "^8.6.0",
  "lucide-react": "^0.535.0",
  "next": "15.4.5",
  "next-themes": "^0.4.6",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-hook-form": "^7.62.0",
  "react-loading-skeleton": "^3.5.0",
  "sonner": "^2.0.6",
  "tailwind-merge": "^3.3.1"
}





