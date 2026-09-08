Implement the public quiz SSO entry flow.
Reuse the existing User entity and temporary development authentication.
Do not accept name as user input; identity must come from SSO.
For development, use the existing dummy users to simulate SSO identity.
Add POST /api/public/quizzes/{quizId}/start accepting only the development SSO identity.
Resolve the identity to the stored User and create a participant quiz session.
Allow entry only when the quiz status is ACTIVE.
Prevent duplicate active sessions for the same user and quiz.
Return sessionId, quizId, participant name, email and quiz details.
Keep the design ready for Okta to replace the development SSO later.
