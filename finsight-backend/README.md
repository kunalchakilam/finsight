Implement the Experience Center participant registration flow.

1. Add GET /api/experience/quizzes/active to return the currently ACTIVE EXPERIENCE_CENTER quiz.
2. Add POST /api/experience/quizzes/{quizId}/register accepting name and 9-digit SSO.
3. These endpoints must not require Okta, dev-login or authenticated Spring Security.
4. Validate the quiz exists, is EXPERIENCE_CENTER and is currently ACTIVE.
5. Every registration creates a NEW independent quiz attempt.
6. The same SSO may register multiple times for the same quiz.
7. Do not apply the normal one-active-session-per-user restriction.
8. Reuse the existing QuizSession/Participant infrastructure.
9. Generate and persist the participant's question sequence once during registration.
10. Registration must NOT start the first question.
11. Return sessionId and the configuration needed for the instructions screen.
12. Never return SSO, email, correct answers or authentication information.
