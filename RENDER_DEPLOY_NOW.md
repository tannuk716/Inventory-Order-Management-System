# 🚀 Deploy Backend to Render NOW

## The Problem
Vercel doesn't support FastAPI properly. We need to use Render instead.

## Quick 5-Minute Setup

### Step 1: Go to Render
Click this link: https://dashboard.render.com/create?type=web

### Step 2: Connect GitHub
- Click "Connect account" if needed
- Select repository: `Inventory-Order-Management-System`

### Step 3: Configure (Copy these EXACTLY)

**Name:**
```
inventory-backend
```

**Root Directory:**
```
backend
```

**Runtime:**
```
Python 3
```

**Build Command:**
```
pip install -r requirements.txt
```

**Start Command:**
```
uvicorn main:app --host 0.0.0.0 --port $PORT
```

**Plan:**
```
Free
```

### Step 4: Environment Variables

Click "Advanced" → "Add Environment Variable"

**Variable 1:**
- Key: `DATABASE_URL`
- Value: `postgresql://neondb_owner:npg_JXw0QmWOlhk9@ep-square-dust-ap4jl513.us-east-1.aws.neon.tech/neondb?sslmode=require`

**Variable 2:**
- Key: `CORS_ORIGINS`
- Value: `https://frontend-kappa-three-83.vercel.app`

### Step 5: Deploy
- Click "Create Web Service"
- Wait 5-10 minutes

### Step 6: Get Your URL
- Once deployed, copy the URL (looks like: `https://inventory-backend-xxxx.onrender.com`)
- Tell me the URL and I'll update the frontend!

## That's It!

After you give me the backend URL, I'll:
1. Update frontend environment variable
2. Redeploy frontend
3. Everything will work!

---

## Opening Render for you now...
