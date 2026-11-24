
# BugFlow API Test Cases

## Test Case 1: Home API
- Test ID: API_001
- Endpoint: GET /
- Purpose: Verify that the home API is working.
- Expected Status Code: 200
- Expected Response: {"message": "Welcome to BugFlow API"}

## Test Case 2: Health Check API
- Test ID: API_002
- Endpoint: GET /health
- Purpose: Verify that the API health check is working.
- Expected Status Code: 200
- Expected Response: {"status": "healthy", "message": "BugFlow API is running smoothly."}
