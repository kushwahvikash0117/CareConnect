import joblib


class ScamService:

    def __init__(self):

        self.model = joblib.load(
            "models/call_model.pkl"
        )

    def detect(
        self,
        phone_number,
        transcript
    ):

        prediction = self.model.predict(
            [transcript]
        )[0]

        confidence = max(
            self.model.predict_proba(
                [transcript]
            )[0]
        )

        return {
            "phone_number": phone_number,
            "prediction": prediction.upper(),
            "confidence": round(
                confidence * 100,
                2
            )
        }


scam_service = ScamService()