# Testing Guide

## Local Testing with Docker Compose

1. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

2. Start all services:
```bash
docker-compose up --build
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## API Testing

### Using FastAPI Swagger UI

1. Navigate to http://localhost:8000/docs
2. Test each endpoint using the interactive documentation

### Using curl

#### Create a Product
```bash
curl -X POST http://localhost:8000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "sku": "LAP001",
    "price": 999.99,
    "quantity": 50
  }'
```

#### Get All Products
```bash
curl http://localhost:8000/products
```

#### Create a Customer
```bash
curl -X POST http://localhost:8000/customers \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }'
```

#### Create an Order
```bash
curl -X POST http://localhost:8000/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": 1,
    "items": [
      {
        "product_id": 1,
        "quantity": 2
      }
    ]
  }'
```

## Business Logic Testing

### Test Cases

1. **Unique SKU Validation**
   - Try creating two products with the same SKU
   - Expected: Second request should fail with 400 error

2. **Unique Email Validation**
   - Try creating two customers with the same email
   - Expected: Second request should fail with 400 error

3. **Negative Quantity Validation**
   - Try creating a product with negative quantity
   - Expected: Request should fail with validation error

4. **Insufficient Stock**
   - Create a product with quantity 5
   - Try to order 10 units
   - Expected: Order should fail with insufficient stock error

5. **Stock Reduction**
   - Create a product with quantity 10
   - Create an order for 3 units
   - Check product quantity
   - Expected: Product quantity should be 7

6. **Total Amount Calculation**
   - Create products with known prices
   - Create an order with multiple items
   - Expected: Total amount should match sum of (price × quantity)

## Frontend Testing

1. **Dashboard**
   - Verify statistics display correctly
   - Check low stock alerts appear for products with quantity < 10

2. **Product Management**
   - Add a new product
   - Edit product details
   - Delete a product
   - Verify form validation

3. **Customer Management**
   - Add a new customer
   - Delete a customer
   - Verify email validation

4. **Order Management**
   - Create an order with multiple items
   - View order details
   - Delete an order
   - Verify stock updates after order creation

## Troubleshooting

### Backend won't start
- Check DATABASE_URL is correct
- Ensure PostgreSQL is running
- Check logs: `docker-compose logs backend`

### Frontend can't connect to backend
- Verify REACT_APP_API_URL is set correctly
- Check CORS_ORIGINS includes frontend URL
- Check network connectivity

### Database connection issues
- Verify PostgreSQL container is healthy
- Check database credentials
- Ensure database exists
