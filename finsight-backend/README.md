Implement the temporary SSO-based participant entry for public quizzes.
Reuse the existing User entity and 9-digit SSO authentication logic.
Add a participant session entity if one does not already exist.
Add POST /api/public/quizzes/{quizId}/start accepting only the 9-digit SSO.
Resolve the SSO to the existing User and create a quiz participant session.
Allow starting only when the quiz status is ACTIVE.
Prevent the same SSO from creating multiple active sessions for the same quiz.
Return sessionId, quizId, quiz name, participant name and total question count.
Do not add a lobby or host-start requirement.
