Debug the public quiz flow because SSO succeeds but the first question is not displayed.
Trace the flow from QuizEntry SSO submission through the start API to the Quiz screen.
Inspect the existing QuizEntry, Quiz screen, routing and src/api.js implementation before changing anything.
Verify the start API response is received and sessionId is stored/passed correctly.
Verify the Quiz screen actually calls the current-question API after receiving sessionId.
Verify the API response is mapped correctly to question text and four options.
Add temporary console logging for start response, sessionId and question response.
Handle loading and API errors visibly instead of leaving a blank screen.
Do not redesign the gamified UI or change scoring in this step.
