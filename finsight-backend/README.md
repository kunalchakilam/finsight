Fix the existing Spin the Wheel quiz flow for the following issues. Do not redesign the quiz engine.

1. Fix wheel/question mismatch: every wheel segment must map to exactly one question in the participant's persisted remaining-question sequence.
2. When POST /spin selects wheelIndex, the backend must select the exact question represented by that index and return questionId, questionNumber, topicName, wheelIndex and the complete question data required by the existing quiz UI.
3. The returned question MUST belong to the returned topicName; never call the generic "next question" selection logic after a spin.
4. Persist the selected question as the participant's current question before returning the spin response.
5. The answer API must validate against that exact persisted current questionId, not a newly selected/random question.
6. Fix answer validation: compare the submitted option value with Question.correctAnswer using trim + case-insensitive comparison.
7. Always return the actual Question.correctAnswer in the answer-result response for incorrect answers.
8. Prevent stale question IDs, duplicate submissions and race conditions between spin, answer and next calls.
9. Fix session resume: if the same authenticated user already has an IN_PROGRESS session for the same quiz, starting the quiz must return that existing session instead of creating a new one.
10. Resume must return the persisted current question, remaining questions, current score and current question state.
11. Only create a new session when the user has no existing IN_PROGRESS session for that quiz.
12. Do not mark an existing IN_PROGRESS session completed merely because the user closed the browser/tab.
13. A session should become COMPLETED only after its final question is actually answered or times out.
14. Keep the existing scoring, 20-second timer and final-result logic unchanged.
