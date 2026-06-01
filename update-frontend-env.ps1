# Update Frontend Environment Variable Script
# Usage: .\update-frontend-env.ps1 "https://your-backend-url.onrender.com"

param(
    [Parameter(Mandatory=$true)]
    [string]$BackendUrl
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Updating Frontend Environment Variable" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Backend URL: $BackendUrl" -ForegroundColor Yellow
Write-Host ""

# Navigate to frontend directory
Set-Location -Path "frontend"

# Remove existing environment variable
Write-Host "Removing old environment variable..." -ForegroundColor Yellow
vercel env rm REACT_APP_API_URL production --yes 2>$null

# Add new environment variable
Write-Host "Adding new environment variable..." -ForegroundColor Yellow
$env:REACT_APP_API_URL = $BackendUrl
echo $BackendUrl | vercel env add REACT_APP_API_URL production

# Redeploy
Write-Host ""
Write-Host "Redeploying frontend..." -ForegroundColor Yellow
vercel --prod --yes

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "SUCCESS! Frontend Updated" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your app is now fully connected!" -ForegroundColor Cyan
Write-Host "Frontend: https://frontend-kappa-three-83.vercel.app" -ForegroundColor White
Write-Host "Backend: $BackendUrl" -ForegroundColor White
Write-Host ""
