# models/domain_intelligence.py
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

class DomainIntelligence:
    def __init__(self):
        self.clf = RandomForestClassifier(n_estimators=100, random_state=42)

    def train(self, X, y):
        self.clf.fit(X, y)

    def predict(self, data):
        return self.clf.predict(data)
