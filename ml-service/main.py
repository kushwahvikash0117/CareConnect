from fastapi import FastAPI

from app.api.phishing import router as phishing_router
from app.api.scam import router as scam_router
from app.api.wellness import router as wellness_router

app = FastAPI(
    title="CareConnect ML Service"
)

app.include_router(
    phishing_router,
    prefix="/phishing",
    tags=["Phishing Detection"]
)

app.include_router(
    scam_router,
    prefix="/scam",
    tags=["Scam Detection"]
)

app.include_router(
    wellness_router,
    prefix="/wellness",
    tags=["Wellness Monitoring"]
)

@app.get("/")
def home():
    return {
        "service": "CareConnect ML Service",
        "status": "running"
    }