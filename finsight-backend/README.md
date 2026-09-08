Debug the public quiz flow because SSO succeeds but the first question never appears.
Trace the complete flow from POST /api/public/quizzes/{quizId}/start to GET current question.
Inspect the existing Quiz, Question, participant-session entities, services and controllers before changing anything.
Verify that /start creates a valid sessionId and that the response contains it.
Verify the session is linked to the correct ACTIVE quiz and has a valid current question.
Fix any question-selection, session-state, transaction or API response issue found.
GET /question must return the first eligible question with its four options.
Never return correctAnswer.
Add clear backend logging for quizId, sessionId and questionId during this flow.
Do not modify scoring, leaderboard or quiz UI in this step.
