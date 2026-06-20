from fastapi import APIRouter

from app.schemas.wellness_schema import (
    WellnessRequest,
    WellnessResponse
)

from app.services.wellness_service import (
    wellness_service
)

router = APIRouter()


@router.post(
    "/check",
    response_model=WellnessResponse
)
def check_wellness(
    request: WellnessRequest
):

    return wellness_service.analyze(
        request.steps,
        request.heart_rate,
        request.sleep_hours,
        request.medication_taken
    )