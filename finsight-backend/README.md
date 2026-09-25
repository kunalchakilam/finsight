Implement the Experience Center participant flow using the existing quiz/session engine.

1. Use EXPERIENCE_CENTER as the existing Quiz visibility type.
2. Add unauthenticated endpoints under /api/experience/.
3. Add GET /api/experience/quizzes/active to return the currently ACTIVE Experience Center quiz.
4. Add POST /api/experience/quizzes/{quizId}/register accepting name and 9-digit SSO.
5. Do not require Okta, dev-login or Spring Security authentication for these participant endpoints.
6. Validate the quiz is EXPERIENCE_CENTER and currently ACTIVE.
7. Every registration creates a NEW independent participant attempt, even for the same SSO.
8. Do not apply the normal one-active-session-per-user restriction.
9. Reuse the existing Quiz, Question, QuizSession/Participant, scoring and result infrastructure.
10. Generate and persist the participant question sequence once during registration.
11. Registration must NOT start the first question yet.
12. Return sessionId plus the quiz configuration needed for the instructions screen.
13. Never expose correct answers, email, authentication data or internal security fields.
