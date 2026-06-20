from pydantic import BaseModel
from datetime import datetime


class HealthResponse(BaseModel):
    service: str
    status: str
    timestamp: datetime