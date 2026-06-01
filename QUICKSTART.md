# Quick Start Guide

## Application is Running! 🎉

Your Inventory & Order Management System is now live and accessible at:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## What You Can Do Now

### 1. Access the Application
Open your web browser and navigate to:
```
http://localhost:3000
```

### 2. Explore the Features

#### Dashboard
- View total products, customers, and orders
- See low stock alerts

#### Products Management
- Add new products with SKU, price, and quantity
- Edit existing products
- Delete products
- View all products in a table

#### Customers Management
- Add new customers with name, email, and phone
- View all customers
- Delete customers

#### Orders Management
- Create new orders by selecting customer and products
- View order details including items and total amount
- Delete orders
- Stock automatically reduces when orders are created

### 3. Test the API
Visit the interactive API documentation:
```
http://localhost:8000/docs
```

Here you can:
- Test all API endpoints
- See request/response schemas
- Try out the business logic

## Stopping the Application

To stop all services:
```bash
docker compose down
```

To stop and remove all data (including database):
```bash
docker compose down -v
```

## Restarting the Application

To start the application again:
```bash
docker compose up -d
```

## Viewing Logs

To view logs from all services:
```bash
docker compose logs
```

To view logs from a specific service:
```bash
docker compose logs backend
docker compose logs frontend
docker compose logs db
```

To follow logs in real-time:
```bash
docker compose logs -f
```

## Troubleshooting

### Backend not responding
```bash
docker compose logs backend
docker compose restart backend
```

### Frontend not loading
```bash
docker compose logs frontend
docker compose restart frontend
```

### Database connection issues
```bash
docker compose logs db
docker compose restart db
```

### Reset everything
```bash
docker compose down -v
docker compose up --build -d
```

## Next Steps

1. **Test the Application**: Create some products, customers, and orders
2. **Review the Code**: Check out the backend and frontend code
3. **Deploy Online**: Follow `DEPLOYMENT.md` for deployment instructions
4. **Push to Docker Hub**: Build and push your images
5. **Submit**: Complete the `SUBMISSION.md` checklist

## Important URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Database: localhost:5432 (PostgreSQL)

## Default Credentials

Database:
- User: inventory_user
- Password: inventory_password
- Database: inventory_db
- Port: 5432

## Features Implemented

✅ Product CRUD with unique SKU validation
✅ Customer CRUD with unique email validation
✅ Order management with inventory tracking
✅ Automatic stock reduction on order creation
✅ Total amount calculation by backend
✅ Responsive React frontend
✅ FastAPI backend with automatic documentation
✅ PostgreSQL database
✅ Fully containerized with Docker
✅ Docker Compose orchestration

Enjoy building with your Inventory Management System!
