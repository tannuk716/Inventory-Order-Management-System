# Inventory & Order Management System

A full-stack containerized application for managing products, customers, orders, and inventory tracking with automatic stock management.

## 🚀 Features

- **Product Management** - CRUD operations with unique SKU validation
- **Customer Management** - CRUD operations with unique email validation
- **Order Management** - Multi-item orders with automatic inventory tracking
- **Automatic Stock Reduction** - Inventory updates automatically when orders are placed
- **Low Stock Alerts** - Dashboard warnings for products running low
- **Professional UI** - Clean, modern, and responsive design
- **RESTful API** - Well-documented FastAPI backend
- **Fully Containerized** - Docker & Docker Compose ready

## 🛠️ Technology Stack

- **Backend**: Python, FastAPI
- **Frontend**: React (JavaScript)
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

## 📋 Prerequisites

- Docker Desktop installed
- Git

## 🌐 Deployment

**Ready to deploy?** See [FINAL_SUBMISSION.md](FINAL_SUBMISSION.md) for complete deployment instructions to:
- Docker Hub
- Render (Backend)
- Vercel (Frontend)

**Automated scripts available**:
- `push-to-dockerhub.ps1` (PowerShell)
- `push-to-dockerhub.bat` (CMD)

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/tannuk716/Inventory-Order-Management-System.git
cd Inventory-Order-Management-System
```

2. **Create environment file**
```bash
cp .env.example .env
```

3. **Start the application**
```bash
docker-compose up --build -d
```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 📁 Project Structure

```
├── backend/              # FastAPI backend
│   ├── main.py          # API endpoints
│   ├── models.py        # Database models
│   ├── schemas.py       # Pydantic schemas
│   ├── database.py      # Database configuration
│   └── Dockerfile
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.js
│   │   └── api.js       # API client
│   └── Dockerfile
├── docker-compose.yml   # Service orchestration
└── README.md
```

## 🔌 API Endpoints

### Products
- `POST /products` - Create product
- `GET /products` - List all products
- `GET /products/{id}` - Get product by ID
- `PUT /products/{id}` - Update product
- `DELETE /products/{id}` - Delete product

### Customers
- `POST /customers` - Create customer
- `GET /customers` - List all customers
- `GET /customers/{id}` - Get customer by ID
- `DELETE /customers/{id}` - Delete customer

### Orders
- `POST /orders` - Create order
- `GET /orders` - List all orders
- `GET /orders/{id}` - Get order by ID
- `DELETE /orders/{id}` - Delete order

### Dashboard
- `GET /dashboard` - Get dashboard statistics

## 🔒 Business Rules

- Product SKU must be unique
- Customer email must be unique
- Product quantity cannot be negative
- Orders cannot be placed if inventory is insufficient
- Creating an order automatically reduces available stock
- Total order amount is calculated automatically by the backend

## 🛑 Stopping the Application

```bash
docker-compose down
```

To remove all data including database:
```bash
docker-compose down -v
```

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
POSTGRES_USER=inventory_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=inventory_db
DATABASE_URL=postgresql://inventory_user:your_password@db:5432/inventory_db
CORS_ORIGINS=http://localhost:3000
REACT_APP_API_URL=http://localhost:8000
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tannu Kumar**
- GitHub: [@tannuk716](https://github.com/tannuk716)

## 🙏 Acknowledgments

Built as a technical assessment project demonstrating full-stack development skills with modern technologies and best practices.
