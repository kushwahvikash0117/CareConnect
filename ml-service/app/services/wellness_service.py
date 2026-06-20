import joblib
import pandas as pd
from app.utils.model_loader import ModelLoader


class WellnessService:

    def __init__(self):

        self.model = ModelLoader.load_wellness_model()

    def analyze(
        self,
        steps: int,
        heart_rate: int,
        sleep_hours: float,
        medication_taken: int
    ):

        sample = pd.DataFrame([
            {
                "steps": steps,
                "heart_rate": heart_rate,
                "sleep_hours": sleep_hours,
                "medication_taken": medication_taken
            }
        ])

        prediction = self.model.predict(
            sample
        )[0]

        status = "NORMAL"

        if prediction == -1:
            status = "ANOMALY_DETECTED"

        return {
            "status": status,
            "prediction": int(prediction)
        }


wellness_service = WellnessService()