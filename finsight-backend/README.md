Implement the Experience Center registration-to-start flow.

1. Registration creates the session but does not start the first question.
2. Return totalQuestions, secondsPerQuestion, scoring information, presentationMode and questionSelectionMode.
3. Do not expose questions, options or correct answers in registration response.
4. Add POST /api/experience/sessions/{sessionId}/start.
5. Validate the session belongs to an EXPERIENCE_CENTER quiz.
6. Start the existing participant session using its already-persisted question sequence.
7. Never generate a second question sequence when Start Quiz is clicked.
8. Return the session state required by the existing immersive quiz UI.
9. Reuse existing Standard/Spin Wheel presentation, timer, scoring and completion logic.
10. Multiple attempts from the same SSO remain independent.
11. Do not create duplicate Quiz, Question or scoring services.
