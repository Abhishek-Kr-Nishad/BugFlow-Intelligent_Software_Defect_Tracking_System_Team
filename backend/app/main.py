from fastapi import FastAPI

app = FastAPI(
    title="BugFlow API",
    description = "Software Issue Tracking and Resolution Platform", version="1.0.0"
)
@app.get("/")
def home():
    return {"message": "Welcome to BugFlow API"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "message": "BugFlow API is running smoothly."}