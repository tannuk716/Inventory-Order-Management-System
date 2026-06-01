@echo off
echo ========================================
echo Docker Hub Push Script
echo ========================================
echo.

echo Step 1: Checking if you're logged in to Docker Hub...
docker info | findstr "Username" >nul 2>&1
if %errorlevel% neq 0 (
    echo You are NOT logged in to Docker Hub.
    echo.
    echo Please run: docker login
    echo Then run this script again.
    pause
    exit /b 1
)

echo You are logged in to Docker Hub!
echo.

echo Step 2: Checking if images exist...
docker images tannuk716/inventory-backend:latest --format "{{.Repository}}" | findstr "tannuk716" >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Backend image not found!
    echo Please build the image first: docker-compose build backend
    pause
    exit /b 1
)

docker images tannuk716/inventory-frontend:latest --format "{{.Repository}}" | findstr "tannuk716" >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Frontend image not found!
    echo Please build the image first: docker-compose build frontend
    pause
    exit /b 1
)

echo Both images found!
echo.

echo Step 3: Pushing backend image to Docker Hub...
docker push tannuk716/inventory-backend:latest
if %errorlevel% neq 0 (
    echo ERROR: Failed to push backend image!
    pause
    exit /b 1
)

echo Backend image pushed successfully!
echo.

echo Step 4: Pushing frontend image to Docker Hub...
docker push tannuk716/inventory-frontend:latest
if %errorlevel% neq 0 (
    echo ERROR: Failed to push frontend image!
    pause
    exit /b 1
)

echo Frontend image pushed successfully!
echo.

echo ========================================
echo SUCCESS! Both images pushed to Docker Hub
echo ========================================
echo.
echo Your Docker Hub links:
echo 1. Backend:  https://hub.docker.com/r/tannuk716/inventory-backend
echo 2. Frontend: https://hub.docker.com/r/tannuk716/inventory-frontend
echo.
echo Next steps:
echo 1. Deploy backend on Render (see DEPLOY_NOW.md)
echo 2. Deploy frontend on Vercel (see DEPLOY_NOW.md)
echo.
pause
