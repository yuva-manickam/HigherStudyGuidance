from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from data import INSTITUTE_DATA
from pdf_generator import generate_study_plan_pdf
import os

# Ensure static directory exists
os.makedirs("static", exist_ok=True)

app = FastAPI(
    title="EduNavigator",
    description="Navigate Your Path to Premium Indian Institutes - Comprehensive Higher Study Plan Generator",
    version="1.0.0"
)

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "institutes": INSTITUTE_DATA})

@app.post("/generate")
async def generate_plan(name: str = Form(...), institute: str = Form(...), category: str = Form(...)):
    pdf_path = generate_study_plan_pdf(name, institute, category)
    if pdf_path and os.path.exists(pdf_path):
        # Extract just the filename from the path
        filename = os.path.basename(pdf_path)
        return {"status": "success", "download_url": f"/download/{filename}"}
    return {"status": "error", "message": "Failed to generate PDF"}

@app.get("/download/{filename}")
async def download_file(filename: str):
    file_path = os.path.join("static", filename)
    if os.path.exists(file_path):
        return FileResponse(
            path=file_path,
            filename=filename,
            media_type='application/pdf'
        )
    return {"status": "error", "message": "File not found"}
