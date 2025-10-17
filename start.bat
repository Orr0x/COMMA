@echo off
echo ========================================
echo   COMMA Studio Website - Quick Start
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [1/2] Installing dependencies...
    echo This might take a few minutes...
    echo.
    call npm install
    echo.
    echo ✓ Dependencies installed successfully!
    echo.
) else (
    echo ✓ Dependencies already installed
    echo.
)

echo [2/2] Starting development server...
echo.
echo Your website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev
