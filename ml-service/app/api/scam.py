from fastapi import APIRouter

from app.schemas.scam_schema import (
    ScamRequest,
    ScamResponse
)

from app.services.scam_service import (
    scam_service
)

router = APIRouter()


@router.post(
    "/check",
    response_model=ScamResponse
)
def check_scam(
    request: ScamRequest
):

    return scam_service.detect(
        request.phone_number,
        request.transcript
    )