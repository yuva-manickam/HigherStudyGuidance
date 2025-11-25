# Future Architect - Higher Study Plan Generator

A comprehensive web application that generates personalized study plans and career roadmaps for premium Indian institutes.

## Features

- 🎯 **Personalized Study Plans**: Generate customized PDF reports based on target institute and category
- 📊 **Category-Based Analysis**: Cutoff analysis for General, OBC, SC, ST, and EWS categories
- 🏛️ **Multiple Institutes**: Covers IITs, NITs, IIITs, VIT, and other premium institutes
- 📈 **Comprehensive Data**: Entrance exam details, placement statistics, ROI analysis, and more
- 📄 **Professional PDF Reports**: Beautifully formatted PDF reports with detailed insights

## Supported Institutes

- IIT (Indian Institutes of Technology)
- NIT Trichy (National Institute of Technology, Tiruchirappalli)
- IIIT Hyderabad (International Institute of Information Technology)
- VIT (Vellore Institute of Technology)
- SSN College of Engineering
- NEET (Medical)
- IISc, IISER, NLU, and more

## Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: HTML, CSS, JavaScript
- **PDF Generation**: FPDF
- **Templating**: Jinja2

## Local Development

### Prerequisites
- Python 3.11 or higher

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd General
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Run the application
```bash
uvicorn main:app --reload
```

4. Open your browser and navigate to `http://localhost:8000`

## Deployment

This application is ready to deploy on:
- Render
- Railway
- Google Cloud Run
- Heroku
- Vercel (with modifications)

## Usage

1. Enter your name
2. Select your target institute
3. Select your category (General/OBC/SC/ST/EWS)
4. Click "Generate Plan"
5. Download your personalized PDF report

## Project Structure

```
.
├── main.py                 # FastAPI application
├── data.py                 # Institute data and cutoff information
├── pdf_generator.py        # PDF generation logic
├── templates/
│   └── index.html         # Frontend template
├── static/
│   ├── style.css          # Styling
│   └── script.js          # Frontend logic
├── requirements.txt       # Python dependencies
├── Procfile              # Deployment configuration
└── runtime.txt           # Python version specification
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please open an issue on GitHub.
