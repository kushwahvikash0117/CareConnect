from app.utils.constants import (
    SCAM_THRESHOLD,
    SUSPICIOUS_THRESHOLD
)


def calculate_risk(
    keyword_count: int
):
    """
    Calculate scam risk score
    """

    score = min(
        keyword_count * 15,
        100
    )

    if score >= SCAM_THRESHOLD:
        status = "SCAM"

    elif score >= SUSPICIOUS_THRESHOLD:
        status = "SUSPICIOUS"

    else:
        status = "SAFE"

    return {
        "risk_score": score,
        "status": status
    }