import joblib
from transformers import pipeline


class ModelLoader:

    phishing_model = None
    wellness_model = None

    @classmethod
    def load_phishing_model(cls):

        if cls.phishing_model is None:

            cls.phishing_model = pipeline(
                "text-classification",
                model="mrm8488/bert-tiny-finetuned-sms-spam-detection"
            )

        return cls.phishing_model

    @classmethod
    def load_wellness_model(cls):

        if cls.wellness_model is None:

            cls.wellness_model = joblib.load(
                "models/wellness_anomaly.pkl"
            )

        return cls.wellness_model