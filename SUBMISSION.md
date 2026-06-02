# 📋 Technical Assessment Submission

## Project: Inventory & Order Management System

---

## ✅ Required Links

### 1. GitHub Repository
```
https://github.com/tannuk716/Inventory-Order-Management-System
```
**Contains:** Complete source code (Frontend + Backend), Docker configuration, documentation

### 2. Backend Docker Hub Image
```
https://hub.docker.com/r/tannu7870/inventory-backend
```
**Status:** Public and accessible

### 3. Frontend Docker Hub Image
```
https://hub.docker.com/r/tannu7870/inventory-frontend
```
**Status:** Public and accessible

### 4. Frontend Hosted URL
```
https://frontend-kappa-three-83.vercel.app
```
**Platform:** Vercel  
**Status:** Live and functional

### 5. Backend API Hosted URL
```
https://inventory-backend-ujim.onrender.com
```
**Platform:** Render  
**Status:** Live and functional

### 6. API Documentation
```
https://inventory-backend-ujim.onrender.com/docs
```
**Type:** Interactive Swagger/OpenAPI documentation

---

## 🏗️ Technology Stack

- **Frontend:** React (JavaScript)
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL (Neon serverless)
- **Containerization:** Docker, Docker Compose
- **Deployment:** Vercel (Frontend), Render (Backend), Neon (Database)

---

## ✅ Features Implemented

### Product Management
- Create, read, update, delete products
- Unique SKU validation
- Stock quantity tracking

### Customer Management
- Create, read, delete customers
- Unique email validation
- Customer information management

### Order Management
- Create, read, delete orders
- Multi-item order support
- Automatic inventory reduction
- Stock validation before order placement
- Automatic total calculation

### Dashboard
- Total products count
- Total customers count
- Total orders count
- Low stock product alerts

### Business Logic
- Product SKU must be unique ✅
- Customer email must be unique ✅
- Product quantity cannot be negative ✅
- Orders blocked if insufficient inventory ✅
- Stock automatically reduces on order creation ✅
- Order total calculated by backend ✅
- Proper error handling with HTTP status codes ✅

---

## 📱 Application Screenshots

**Live Application:** https://frontend-kappa-three-83.vercel.app

---

## 🚀 Running Locally

### Prerequisites
- Docker Desktop
- Git

### Steps
```bash
# Clone repository
git clone https://github.com/tannuk716/Inventory-Order-Management-System.git
cd Inventory-Order-Management-System

# Copy environment file
cp .env.example .env

# Start all services
docker-compose up --build

# Access application
Frontend: http://localhost:3000
Backend: http://localhost:8000
API Docs: http://localhost:8000/docs
```

---

## 📚 Documentation

- **README.md** - Project overview and setup instructions
- **LIVE_LINKS.md** - All deployment links and testing guide
- **API Documentation** - Available at `/docs` endpoint

---

## ✅ Requirements Checklist

- [x] Full-stack application (React + FastAPI + PostgreSQL)
- [x] CRUD operations for products, customers, orders
- [x] Automatic inventory tracking
- [x] Business logic implementation
- [x] Unique validation (SKU, email)
- [x] Stock validation
- [x] Professional responsive UI
- [x] RESTful API with proper error handling
- [x] Docker containerization
- [x] Docker Compose orchestration
- [x] Environment variable configuration
- [x] GitHub repository
- [x] Docker Hub images (backend & frontend)
- [x] Online deployment (frontend)
- [x] Online deployment (backend)
- [x] Database hosting
- [x] API documentation

---

## 🎉 Submission Summary

All technical requirements have been met. The application is fully deployed, tested, and operational at the provided URLs.

**Primary Application URL:** https://frontend-kappa-three-83.vercel.app

---

**Submitted by:** Tannu Kumar  
**GitHub:** https://github.com/tannuk716  
**Date:** June 2, 2026
