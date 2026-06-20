from pydantic import BaseModel, Field


class WellnessRequest(BaseModel):

    steps: int = Field(
        ...,
        ge=0,
        le=100000
    )

    heart_rate: int = Field(
        ...,
        ge=20,
        le=250
    )

    sleep_hours: float = Field(
        ...,
        ge=0,
        le=24
    )

    medication_taken: int = Field(
        ...,
        ge=0,
        le=1,
        description="0 = Not Taken, 1 = Taken"
    )


class WellnessResponse(BaseModel):
    status: str
    prediction: int