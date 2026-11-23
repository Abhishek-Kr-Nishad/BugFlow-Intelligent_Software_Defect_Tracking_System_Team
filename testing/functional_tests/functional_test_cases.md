
# BugFlow Functional Test Cases

## Test Case 1: Verify Application Home Page

- Test ID: FUNC_001
- Feature: Home Page
- Objective: Verify that the application home endpoint responds correctly.
- Preconditions: BugFlow backend server is running.
- Steps:
  1. Send a GET request to the home endpoint (/).
  2. Check the response received.
- Expected Result: The application returns a welcome message.
- Status: Not Tested

## Test Case 2: Verify API Health Status

- Test ID: FUNC_002
- Feature: Health Check
- Objective: Verify that the API health endpoint reports its status.
- Preconditions: BugFlow backend server is running.
- Steps:
  1. Send a GET request to the health endpoint (/health).
  2. Check the returned status.
- Expected Result: The API returns a healthy status.
- Status: Not Tested

## Test Case 3: Verify Invalid Endpoint

- Test ID: FUNC_003
- Feature: Error Handling
- Objective: Verify that an invalid endpoint is handled correctly.
- Preconditions: BugFlow backend server is running.
- Steps:
  1. Send a GET request to an invalid endpoint (/invalid).
  2. Check the response status code.
- Expected Result: The API returns HTTP 404 Not Found.
- Status: Not Tested
