from fastapi import APIRouter

from app.schemas.phishing_schema import (
    SMSRequest,
    SMSResponse
)

from app.services.phishing_service import (
    phishing_service
)

router = APIRouter()


@router.post(
    "/check",
    response_model=SMSResponse
)
def check_phishing(
    request: SMSRequest
):

    return phishing_service.detect(
        request.message
    )