@echo off
echo ========================================
echo Future Architect - Local Server
echo ========================================
echo.
echo Starting the application...
echo.
echo The application will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

uvicorn main:app --reload --host 0.0.0.0 --port 8000
