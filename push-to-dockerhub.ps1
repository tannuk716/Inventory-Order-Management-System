# Docker Hub Push Script
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Docker Hub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if logged in
Write-Host "Step 1: Checking if you're logged in to Docker Hub..." -ForegroundColor Yellow
$dockerInfo = docker info 2>&1 | Select-String -Pattern "Username"
if (-not $dockerInfo) {
    Write-Host "You are NOT logged in to Docker Hub." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please run: docker login" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "You are logged in to Docker Hub!" -ForegroundColor Green
Write-Host ""

# Step 2: Check if images exist
Write-Host "Step 2: Checking if images exist..." -ForegroundColor Yellow
$backendImage = docker images tannuk716/inventory-backend:latest --format "{{.Repository}}" 2>&1
if ($backendImage -notmatch "tannuk716") {
    Write-Host "ERROR: Backend image not found!" -ForegroundColor Red
    Write-Host "Please build the image first: docker-compose build backend" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

$frontendImage = docker images tannuk716/inventory-frontend:latest --format "{{.Repository}}" 2>&1
if ($frontendImage -notmatch "tannuk716") {
    Write-Host "ERROR: Frontend image not found!" -ForegroundColor Red
    Write-Host "Please build the image first: docker-compose build frontend" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Both images found!" -ForegroundColor Green
Write-Host ""

# Step 3: Push backend
Write-Host "Step 3: Pushing backend image to Docker Hub..." -ForegroundColor Yellow
docker push tannuk716/inventory-backend:latest
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to push backend image!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Backend image pushed successfully!" -ForegroundColor Green
Write-Host ""

# Step 4: Push frontend
Write-Host "Step 4: Pushing frontend image to Docker Hub..." -ForegroundColor Yellow
docker push tannuk716/inventory-frontend:latest
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to push frontend image!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Frontend image pushed successfully!" -ForegroundColor Green
Write-Host ""

# Success message
Write-Host "========================================" -ForegroundColor Green
Write-Host "SUCCESS! Both images pushed to Docker Hub" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your Docker Hub links:" -ForegroundColor Cyan
Write-Host "1. Backend:  https://hub.docker.com/r/tannuk716/inventory-backend" -ForegroundColor White
Write-Host "2. Frontend: https://hub.docker.com/r/tannuk716/inventory-frontend" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Deploy backend on Render (see DEPLOY_NOW.md)" -ForegroundColor White
Write-Host "2. Deploy frontend on Vercel (see DEPLOY_NOW.md)" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to exit"
