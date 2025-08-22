# 🛒 My Next.js Product App

A full-stack product management application built with **Next.js 13 (App Router)**, **MongoDB Atlas**, and **NextAuth.js (Google Authentication)**.  
Users can view products, see detailed product pages, and authenticated users can add new products.

---

## 🚀 Features
- Google authentication with **NextAuth.js**
- Protected **Add Product** page (redirects unauthenticated users to login)
- Product listing with details page
- MongoDB Atlas integration for storing product data
- API routes for CRUD operations (`/api/products`)

---

## ⚙️ Setup & Installation

### 1. Clone the repo
```bash
git clone https://github.com/your-username/my-app.git
cd my-app


2. Install dependencies

npm install
3. Environment Variables

Create a .env.local file in the root with the following:

MONGODB_URI="your-mongodb-atlas-connection-uri"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"


⚠️ Replace the placeholders with your actual MongoDB Atlas and Google OAuth credentials.

4. Run the dev server
npm run dev


Open http://localhost:3000
 in your browser.

🛤️ Route Summary
Public Routes

/ → Homepage

/products → Show all products

/products/[id] → Show product details

Protected Routes

/dashboard/addProduct → Add new product (only available to authenticated users)

API Routes

GET /api/products → Fetch all products

POST /api/products → Add a new product (authenticated users only)

GET /api/products/[id] → Fetch product details by ID

📦 Deployment

This project is deployable on Vercel.
Make sure to add the same environment variables (MONGODB_URI, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET) in the Vercel dashboard before deploying.