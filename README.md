# 🛍️ Shopping APA - Full Stack MERN App

Welcome to **Shopping APA** – a fully functional e-commerce web application built using the **MERN stack**. This application supports user authentication, product browsing, admin control, cloud image uploads, and a clean responsive interface.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🛒 Product Listing & Management
- ☁️ Cloudinary Image Upload
- 🧑‍💼 Admin Panel for Product Control
- ⚛️ React Frontend (User & Admin)
- ⚙️ Express.js Backend API
- 🧠 State Management with React Hooks
- 💅 Styled using Tailwind CSS

---

## 📁 Directory Structure

shopping-apa/
├── backend/ # Node.js + Express + MongoDB backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── index.js
│
├── frontend/ # React frontend for users
│ ├── src/
│ └── vite.config.js
│
├── admin-panel/ # React frontend for admin dashboard
│ ├── src/
│ └── vite.config.js
│
├── .env (for backend)
└── README.md



---

## ⚙️ Initialization & Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shopping-apa.git
cd shopping-apa


### 2. 🔧 Backend Setup (backend/)
Install Dependencies

cd backendv3
npm install


Create .env in backend/ directory

PORT=8080
# MongoDB
mongodb_URI=your_mongodb_connection_string

# JWT
jwtSecret=your_jwt_secret

# Admin Credentials
admin_Email=admin@example.com
admin_Password=your_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret


Start Backend Server

npm run dev
Server runs on: http://localhost:8080


🎨 Frontend Setup (frontend/)
Install Dependencies

cd frontendv3
npm install
Start React Frontend

npm run dev
Frontend runs on: http://localhost:5173

🧑‍💼 Admin Panel Setup (admin-panel/)
Install Dependencies

cd admin-panel
npm install
Start Admin Dashboard

npm run dev
Admin runs on: http://localhost:5174 (or whatever your Vite assigns)

Note: Use admin credentials from .env (in backend) to log in.
