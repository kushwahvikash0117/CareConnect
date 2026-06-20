from pydantic import BaseModel, Field


class SMSRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=5000,
        description="SMS content to analyze"
    )


class SMSResponse(BaseModel):
    message: str
    label: str
    confidence: float