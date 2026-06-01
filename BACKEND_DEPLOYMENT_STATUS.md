# Backend Deployment Instructions

## Current Status
✅ Frontend Deployed: https://frontend-kappa-three-83.vercel.app
⏳ Backend: Waiting for deployment

## Quick Steps on Render Page

You should see the Render deployment page now. Follow these steps:

### 1. On the Render Blueprint Page:
- You should see:
  - ✅ inventory-backend (Web Service)
  - ✅ inventory-db (PostgreSQL Database)

### 2. Click "Apply" or "Create Services"

### 3. Wait 5-10 minutes for deployment

### 4. Once deployed:
- Click on "inventory-backend" service
- Copy the URL (will be like: https://inventory-backend-xxxx.onrender.com)
- **SEND ME THIS URL** and I'll update the frontend to connect to it!

## Alternative: Manual Render Setup

If the Blueprint doesn't work, here's the manual way:

### Step 1: Create Database
1. Go to https://dashboard.render.com
2. Click "New +" → "PostgreSQL"
3. Name: `inventory-db`
4. Plan: Free
5. Click "Create Database"
6. **Copy the "Internal Database URL"**

### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Connect GitHub → Select your repo
3. Settings:
   - Name: `inventory-backend`
   - Root Directory: `backend`
   - Runtime: Python 3
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Plan: Free

### Step 3: Environment Variables
Add these:
- `DATABASE_URL` = (paste the Internal Database URL from Step 1)
- `CORS_ORIGINS` = `https://frontend-kappa-three-83.vercel.app`

### Step 4: Deploy
Click "Create Web Service" and wait 5-10 minutes

## After Backend is Deployed

Once you have the backend URL, I will:
1. Update the frontend environment variable on Vercel
2. Redeploy the frontend
3. Your app will be fully working!

## What to Send Me

Just send me the backend URL that looks like:
```
https://inventory-backend-xxxx.onrender.com
```

Then I'll handle the rest!
