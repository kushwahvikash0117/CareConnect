from pydantic import BaseModel


class ScamRequest(BaseModel):
    phone_number: str
    transcript: str


class ScamResponse(BaseModel):
    phone_number: str
    prediction: str
    confidence: float