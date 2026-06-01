# Submission Checklist

## Required Deliverables

### 1. GitHub Repository
- [ ] Repository is public
- [ ] Contains complete source code
- [ ] Includes README.md with setup instructions
- [ ] Contains .gitignore file
- [ ] Has proper project structure

**Repository URL**: _[Your GitHub URL here]_

### 2. Docker Hub Images
- [ ] Backend image is built and pushed
- [ ] Frontend image is built and pushed
- [ ] Images are public
- [ ] Images are tagged properly

**Backend Image**: _[Your Docker Hub backend image URL]_
**Frontend Image**: _[Your Docker Hub frontend image URL]_

### 3. Live Frontend Deployment
- [ ] Deployed on Vercel/Netlify
- [ ] Publicly accessible
- [ ] Environment variables configured
- [ ] Connected to backend API

**Frontend URL**: _[Your live frontend URL]_

### 4. Live Backend API
- [ ] Deployed on Render/Railway/Fly.io
- [ ] Publicly accessible
- [ ] Database connected
- [ ] CORS configured for frontend

**Backend API URL**: _[Your live backend URL]_
**API Documentation**: _[Your backend URL]/docs_

## Functional Requirements Checklist

### Product Management
- [ ] POST /products - Create product
- [ ] GET /products - List all products
- [ ] GET /products/{id} - Get product by ID
- [ ] PUT /products/{id} - Update product
- [ ] DELETE /products/{id} - Delete product
- [ ] Product has: name, SKU, price, quantity

### Customer Management
- [ ] POST /customers - Create customer
- [ ] GET /customers - List all customers
- [ ] GET /customers/{id} - Get customer by ID
- [ ] DELETE /customers/{id} - Delete customer
- [ ] Customer has: full_name, email, phone

### Order Management
- [ ] POST /orders - Create order
- [ ] GET /orders - List all orders
- [ ] GET /orders/{id} - Get order by ID
- [ ] DELETE /orders/{id} - Delete order
- [ ] Order includes: customer, products, quantity, total

### Business Logic
- [ ] Product SKU is unique
- [ ] Customer email is unique
- [ ] Product quantity cannot be negative
- [ ] Orders fail if inventory insufficient
- [ ] Creating order reduces stock automatically
- [ ] Total amount calculated by backend
- [ ] Proper error handling
- [ ] Appropriate HTTP status codes
- [ ] Request data validation

### Frontend Features
- [ ] Dashboard with statistics
- [ ] Product management (CRUD)
- [ ] Customer management (CRUD)
- [ ] Order management (Create, View, Delete)
- [ ] Responsive design
- [ ] Form validation
- [ ] Error and success messages
- [ ] Clean UI

### Docker Requirements
- [ ] Backend Dockerfile
- [ ] Frontend Dockerfile
- [ ] .dockerignore files
- [ ] docker-compose.yml
- [ ] Environment variables used
- [ ] No hardcoded credentials
- [ ] Named volumes for PostgreSQL
- [ ] Slim/lightweight base images

## Testing Verification

Test the following scenarios:

1. **Create Product**
   - Add a product through the UI
   - Verify it appears in the product list

2. **Unique SKU**
   - Try creating two products with same SKU
   - Should show error message

3. **Create Customer**
   - Add a customer through the UI
   - Verify it appears in customer list

4. **Unique Email**
   - Try creating two customers with same email
   - Should show error message

5. **Create Order**
   - Create an order with products
   - Verify stock is reduced
   - Verify total amount is correct

6. **Insufficient Stock**
   - Try ordering more than available stock
   - Should show error message

7. **Dashboard**
   - Verify statistics are accurate
   - Check low stock alerts

## Documentation

- [ ] README.md with project overview
- [ ] Setup instructions
- [ ] API documentation
- [ ] Deployment guide
- [ ] Environment variables documented

## Final Steps

1. Test all functionality locally with Docker Compose
2. Push code to GitHub
3. Build and push Docker images
4. Deploy backend to hosting platform
5. Deploy frontend to hosting platform
6. Test live deployment
7. Verify all URLs are accessible
8. Submit deliverables

## Notes

- Ensure all URLs are publicly accessible
- Test the application from a different network/device
- Verify CORS is properly configured
- Check that environment variables are set correctly
- Make sure database is persistent
