import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix

print("Loading Dataset...")

df = pd.read_csv(
    "ml-service\\datasets\\spam_call_dataset.csv",
    sep="\t",
    engine="python",
    on_bad_lines="skip",
    header=None,
    names=["label", "text"]
)

df = df.dropna()

print(f"Dataset Shape: {df.shape}")
print(df["label"].value_counts())

X = df["text"]
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print("\nTraining Model...")

model = Pipeline([
    (
        "tfidf",
        TfidfVectorizer(
            stop_words="english",
            max_features=10000,
            ngram_range=(1, 2)
        )
    ),
    (
        "classifier",
        LogisticRegression(
            max_iter=3000,
            class_weight="balanced"
        )
    )
])

model.fit(
    X_train,
    y_train
)

predictions = model.predict(X_test)

print("\nAccuracy:")
print(
    accuracy_score(
        y_test,
        predictions
    )
)

print("\nClassification Report:")
print(
    classification_report(
        y_test,
        predictions
    )
)

print("\nConfusion Matrix:")
print(
    confusion_matrix(
        y_test,
        predictions
    )
)

joblib.dump(
    model,
    "ml-service/models/call_model.pkl"
)

print("\nModel Saved Successfully!")