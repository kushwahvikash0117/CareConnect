import pandas as pd
import joblib

from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

df = pd.read_csv(
    "ml-service/datasets/spam_sms_dataset.csv",
    encoding="latin1"
)

df = df[["v1", "v2"]]
df.columns = ["label", "text"]

X = df["text"]
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("clf", LogisticRegression(max_iter=1000))
])

model.fit(X_train, y_train)

joblib.dump(
    model,
    "ml-service/models/sms_model.pkl"
)

print("SMS Model Saved!")