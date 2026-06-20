import pandas as pd
import joblib
from sklearn.ensemble import IsolationForest

df = pd.read_csv(
    "datasets/wellness_dataset.csv"
)

model = IsolationForest(
    contamination=0.1,
    random_state=42
)

model.fit(df)

joblib.dump(
    model,
    "models/wellness_anomaly.pkl"
)

print("Wellness model trained.")