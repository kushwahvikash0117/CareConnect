import joblib


class PhishingService:

    def __init__(self):

        self.model = joblib.load(
            "models/sms_model.pkl"
        )

    def detect(self, message: str):

        prediction = self.model.predict(
            [message]
        )[0]

        confidence = max(
            self.model.predict_proba(
                [message]
            )[0]
        )

        return {
            "message": message,
            "label": prediction.upper(),
            "confidence": round(
                confidence * 100,
                2
            )
        }


phishing_service = PhishingService()