# ✅ Pre-Deployment Checklist

Use this checklist to ensure everything is ready before deploying your application.

---

## 📋 Phase 1: Local Testing

### Code Verification
- [ ] All Python files have no syntax errors
- [ ] `data.py` contains all institute data
- [ ] `pdf_generator.py` generates PDFs correctly
- [ ] `main.py` runs without errors
- [ ] All templates render correctly

### Functionality Testing
- [ ] Application starts locally (`uvicorn main:app --reload`)
- [ ] Homepage loads at http://localhost:8000
- [ ] All institutes appear in dropdown
- [ ] All categories appear in dropdown (General, OBC, SC, ST, EWS)
- [ ] Form validation works
- [ ] PDF generation works for at least 3 institutes
- [ ] PDF download works
- [ ] Category-specific cutoffs display correctly
- [ ] Multiple PDFs can be generated in succession

### Test Cases
- [ ] Test: IIT with General category
- [ ] Test: NIT Trichy with OBC category
- [ ] Test: IIIT Hyderabad with SC category
- [ ] Test: VIT with ST category
- [ ] Test: SSN with EWS category
- [ ] Test: Special characters in name (e.g., "John O'Brien")
- [ ] Test: Long names (e.g., "Srinivasa Ramanujan Iyengar")

---

## 📦 Phase 2: Files & Configuration

### Required Files
- [ ] `.gitignore` exists
- [ ] `requirements.txt` has all dependencies with versions
- [ ] `Procfile` exists
- [ ] `runtime.txt` specifies Python 3.11.5
- [ ] `README.md` exists
- [ ] `DEPLOYMENT_GUIDE.md` exists
- [ ] `static` directory exists
- [ ] `templates` directory exists

### File Content Verification
- [ ] `.gitignore` excludes `__pycache__`, `*.pyc`, `.env`
- [ ] `requirements.txt` includes: fastapi, uvicorn, fpdf, jinja2, python-multipart, gunicorn
- [ ] `Procfile` has correct start command
- [ ] `runtime.txt` has `python-3.11.5`

### Code Quality
- [ ] No hardcoded secrets or API keys
- [ ] No absolute file paths (use relative paths)
- [ ] Error handling in place for PDF generation
- [ ] Static directory auto-creates if missing
- [ ] No debug mode in production

---

## 🔧 Phase 3: Git & GitHub

### Git Setup
- [ ] Git is installed (`git --version`)
- [ ] Git repository initialized (`git init`)
- [ ] `.gitignore` is working (check with `git status`)
- [ ] All files are staged (`git add .`)
- [ ] Initial commit created (`git commit -m "Initial commit"`)

### GitHub Repository
- [ ] GitHub account exists
- [ ] New repository created on GitHub
- [ ] Repository is PUBLIC (required for free Render deployment)
- [ ] Repository name is descriptive (e.g., `future-architect`)
- [ ] Remote origin added (`git remote -v` shows GitHub URL)
- [ ] Code pushed to GitHub (`git push -u origin main`)
- [ ] All files visible on GitHub website

### Verify on GitHub
- [ ] Visit your GitHub repository URL
- [ ] All files are present
- [ ] `README.md` displays correctly
- [ ] No sensitive data visible
- [ ] Latest commit is visible

---

## 🚀 Phase 4: Deployment Platform

### Render Account
- [ ] Render account created (https://render.com)
- [ ] Email verified
- [ ] GitHub connected to Render
- [ ] Repository access granted to Render

### Service Configuration
- [ ] New Web Service created
- [ ] Correct repository selected
- [ ] Service name set (e.g., `future-architect`)
- [ ] Region selected (closest to target users)
- [ ] Branch set to `main`
- [ ] Build command: `pip install -r requirements.txt`
- [ ] Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Instance type: `Free`
- [ ] Auto-deploy enabled

---

## 🧪 Phase 5: Post-Deployment Testing

### Deployment Verification
- [ ] Deployment completed successfully (check Render dashboard)
- [ ] No errors in build logs
- [ ] No errors in runtime logs
- [ ] Application status shows "Live"
- [ ] URL is accessible (https://your-app.onrender.com)

### Functionality Testing (Live)
- [ ] Homepage loads on live URL
- [ ] All CSS styles load correctly
- [ ] All JavaScript works
- [ ] Form submission works
- [ ] PDF generation works
- [ ] PDF download works
- [ ] All institutes accessible
- [ ] All categories work
- [ ] Category-specific cutoffs display correctly

### Cross-Browser Testing
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on Edge
- [ ] Works on mobile browsers

### Mobile Testing
- [ ] Responsive design works
- [ ] Form is usable on mobile
- [ ] PDF download works on mobile
- [ ] All buttons are clickable
- [ ] Text is readable

### Performance Testing
- [ ] First load time acceptable (30-60s for free tier)
- [ ] Subsequent loads are fast (< 3s)
- [ ] PDF generation completes in reasonable time (< 10s)
- [ ] No timeout errors
- [ ] Multiple users can access simultaneously

---

## 📊 Phase 6: Monitoring & Maintenance

### Monitoring Setup
- [ ] Render dashboard bookmarked
- [ ] Email notifications enabled
- [ ] Logs accessible and readable
- [ ] Metrics visible (CPU, Memory, Requests)

### Documentation
- [ ] Deployment URL documented
- [ ] Admin access credentials saved securely
- [ ] Deployment date recorded
- [ ] Version number noted

### Backup & Recovery
- [ ] Code backed up on GitHub
- [ ] Latest working commit tagged
- [ ] Rollback procedure understood
- [ ] Contact information for support saved

---

## 🎯 Phase 7: Go Live

### Final Checks
- [ ] All above phases completed
- [ ] No critical issues found
- [ ] Performance acceptable
- [ ] All features working
- [ ] Documentation complete

### Launch
- [ ] Application URL shared with test users
- [ ] Feedback mechanism in place
- [ ] Support email/contact set up
- [ ] Usage analytics considered (optional)

### Post-Launch
- [ ] Monitor logs for first 24 hours
- [ ] Check for any errors
- [ ] Gather user feedback
- [ ] Plan for updates and improvements

---

## 🆘 Troubleshooting Checklist

If something goes wrong, check:

- [ ] Render build logs for errors
- [ ] Render runtime logs for errors
- [ ] GitHub repository has all files
- [ ] `requirements.txt` has all dependencies
- [ ] Start command is correct
- [ ] Port is set to `$PORT` (not hardcoded)
- [ ] Static directory exists
- [ ] File permissions are correct
- [ ] No syntax errors in Python code
- [ ] All imports are correct

---

## 📞 Support Resources

- [ ] `DEPLOYMENT_GUIDE.md` reviewed
- [ ] `QUICK_START.md` reviewed
- [ ] Render documentation bookmarked
- [ ] FastAPI documentation bookmarked
- [ ] Support contacts saved

---

## ✅ Final Sign-Off

**Deployment Date**: _______________

**Deployed By**: _______________

**Application URL**: _______________

**Status**: 
- [ ] ✅ Successfully Deployed
- [ ] ⚠️ Deployed with Minor Issues
- [ ] ❌ Deployment Failed

**Notes**:
_______________________________________
_______________________________________
_______________________________________

---

**Congratulations!** 🎉 

If all checkboxes are checked, your application is successfully deployed and ready for users!

---

*Last Updated: 2025-11-25*
*Version: 1.0.0*
