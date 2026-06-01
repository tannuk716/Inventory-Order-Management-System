# Local Setup Without Docker

## Prerequisites

1. **Python 3.11+** - [Download](https://www.python.org/downloads/)
2. **Node.js 18+** - [Download](https://nodejs.org/)
3. **PostgreSQL 15+** - [Download](https://www.postgresql.org/download/windows/)

## Step 1: Install PostgreSQL

1. Download and install PostgreSQL for Windows
2. During installation, set a password for the postgres user
3. Remember the port (default: 5432)

## Step 2: Create Database

Open PostgreSQL command line (psql) or pgAdmin and run:

```sql
CREATE DATABASE inventory_db;
CREATE USER inventory_user WITH PASSWORD 'inventory_password';
GRANT ALL PRIVILEGES ON DATABASE inventory_db TO inventory_user;
```

## Step 3: Setup Backend

1. Open a terminal and navigate to backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate virtual environment:
```bash
# Windows PowerShell
.\venv\Scripts\Activate.ps1

# Windows CMD
.\venv\Scripts\activate.bat
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create `.env` file in backend directory:
```
DATABASE_URL=postgresql://inventory_user:inventory_password@localhost:5432/inventory_db
CORS_ORIGINS=http://localhost:3000
```

6. Run the backend:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at: http://localhost:8000

## Step 4: Setup Frontend

1. Open a NEW terminal and navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in frontend directory:
```
REACT_APP_API_URL=http://localhost:8000
```

4. Run the frontend:
```bash
npm start
```

Frontend will be available at: http://localhost:3000

## Verify Installation

1. Backend API: http://localhost:8000
2. API Documentation: http://localhost:8000/docs
3. Frontend: http://localhost:3000

## Troubleshooting

### PostgreSQL Connection Issues
- Verify PostgreSQL is running
- Check username, password, and database name
- Ensure port 5432 is not blocked

### Backend Issues
- Make sure virtual environment is activated
- Verify all dependencies are installed
- Check DATABASE_URL in .env file

### Frontend Issues
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`
- Check REACT_APP_API_URL in .env file

## Stopping the Application

- Press `Ctrl+C` in each terminal to stop the services
