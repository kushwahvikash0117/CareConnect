from transformers import pipeline
from app.utils.model_loader import ModelLoader


class PhishingService:

    def __init__(self):
        self.classifier = pipeline(
            "text-classification",
            model="models/phishing_model"
        )

    def detect(self, message: str):

        result = self.classifier(message)[0]

        label_map = {
            "LABEL_0": "HAM",
            "LABEL_1": "SPAM"
        }

        return {
            "message": message,
            "label": label_map.get(
                result["label"],
                result["label"]
            ),
            "confidence": round(
                result["score"] * 100,
                2
            )
        }


phishing_service = PhishingService()