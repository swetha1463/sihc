# app.py
from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from models import Cybersecurity, DomainIntelligence, ThreatDetection

app = Flask(__name__)
api = Api(app)

# Define API endpoints
api.add_resource(Cybersecurity, '/cybersecurity')
api.add_resource(DomainIntelligence, '/domain_intelligence')
api.add_resource(ThreatDetection, '/threat_detection')

if __name__ == '__main__':
    app.run(debug=True)
