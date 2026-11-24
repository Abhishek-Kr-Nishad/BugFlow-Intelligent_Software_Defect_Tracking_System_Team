
from fastapi.testclient import TestClient

from backend.app.main import app

client = TestClient(app)


def test_home_api():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {
        "message": "Welcome to BugFlow API"
    }


def test_health_api():
    response = client.get("/health")

    assert response.status_code == 200

    data = response.json()

    assert data["status"] == "healthy"
    assert "BugFlow API is running smoothly." in data["message"]
