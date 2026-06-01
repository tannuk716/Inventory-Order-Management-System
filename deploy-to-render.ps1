# This script will guide you through Render deployment
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Render Deployment Guide" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "The backend needs to be deployed to Render (Vercel doesn't support FastAPI properly)" -ForegroundColor Yellow
Write-Host ""

Write-Host "Please follow these steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to: https://dashboard.render.com" -ForegroundColor White
Write-Host "2. Click 'New +' -> 'Web Service'" -ForegroundColor White
Write-Host "3. Connect your GitHub repository" -ForegroundColor White
Write-Host "4. Configure:" -ForegroundColor White
Write-Host "   - Name: inventory-backend" -ForegroundColor Gray
Write-Host "   - Root Directory: backend" -ForegroundColor Gray
Write-Host "   - Build Command: pip install -r requirements.txt" -ForegroundColor Gray
Write-Host "   - Start Command: uvicorn main:app --host 0.0.0.0 --port `$PORT" -ForegroundColor Gray
Write-Host "5. Add Environment Variable:" -ForegroundColor White
Write-Host "   - DATABASE_URL: postgresql://neondb_owner:npg_JXw0QmWOlhk9@ep-square-dust-ap4jl513.us-east-1.aws.neon.tech/neondb?sslmode=require" -ForegroundColor Gray
Write-Host "   - CORS_ORIGINS: https://frontend-kappa-three-83.vercel.app" -ForegroundColor Gray
Write-Host "6. Click 'Create Web Service'" -ForegroundColor White
Write-Host ""

Write-Host "Opening Render dashboard..." -ForegroundColor Yellow
Start-Process "https://dashboard.render.com/create?type=web"

Write-Host ""
Write-Host "After deployment, copy the backend URL and run:" -ForegroundColor Cyan
Write-Host ".\update-frontend-with-backend.ps1 YOUR_BACKEND_URL" -ForegroundColor Yellow
