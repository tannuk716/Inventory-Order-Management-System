# Deployment Guide

## Backend Deployment (Render/Railway/Fly.io)

### Option 1: Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: `backend`
4. Add environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `CORS_ORIGINS`: Your frontend URL
5. Create a PostgreSQL database on Render and link it

### Option 2: Railway

1. Create a new project on [Railway](https://railway.app)
2. Add PostgreSQL database service
3. Add a new service from GitHub repo
4. Configure:
   - **Root Directory**: `backend`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables from the PostgreSQL service

### Option 3: Fly.io

1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Login: `fly auth login`
3. Create `fly.toml` in backend directory:

```toml
app = "your-app-name"

[build]
  dockerfile = "Dockerfile"

[env]
  PORT = "8000"

[[services]]
  internal_port = 8000
  protocol = "tcp"

  [[services.ports]]
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443
```

4. Deploy: `fly deploy`
5. Create PostgreSQL: `fly postgres create`
6. Attach database: `fly postgres attach <postgres-app-name>`

## Frontend Deployment (Vercel/Netlify)

### Option 1: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend directory: `cd frontend`
3. Deploy: `vercel`
4. Set environment variable:
   - `REACT_APP_API_URL`: Your backend URL
5. For production: `vercel --prod`

Or use Vercel Dashboard:
1. Import project from GitHub
2. Set root directory to `frontend`
3. Add environment variable `REACT_APP_API_URL`
4. Deploy

### Option 2: Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the app:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
3. Deploy: `netlify deploy --prod --dir=build`

Or use Netlify Dashboard:
1. Connect GitHub repository
2. Set build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
3. Add environment variable `REACT_APP_API_URL`
4. Deploy

## Docker Hub

### Build and Push Backend Image

```bash
# Build the image
docker build -t your-username/inventory-backend:latest ./backend

# Login to Docker Hub
docker login

# Push the image
docker push your-username/inventory-backend:latest
```

### Build and Push Frontend Image

```bash
# Build the image
docker build -t your-username/inventory-frontend:latest ./frontend

# Push the image
docker push your-username/inventory-frontend:latest
```

## Environment Variables

### Backend
- `DATABASE_URL`: PostgreSQL connection string
- `CORS_ORIGINS`: Comma-separated list of allowed origins

### Frontend
- `REACT_APP_API_URL`: Backend API URL

## Post-Deployment Checklist

- [ ] Backend API is accessible
- [ ] Frontend can communicate with backend
- [ ] Database migrations are applied
- [ ] CORS is properly configured
- [ ] Environment variables are set
- [ ] Docker images are pushed to Docker Hub
- [ ] All endpoints are working
- [ ] Test creating products, customers, and orders
