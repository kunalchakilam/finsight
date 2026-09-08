Fix the existing public quiz backend flow without changing unrelated functionality.

1. Fix leaderboard data so the result API always returns top 5 completed participants with rank, name and score.
2. Fix answer validation so correctAnswer is always returned from the Question entity for both correct and incorrect submissions.
3. Ensure the participant session uses exactly the configured questionsPerParticipant from its persisted question sequence.
4. Keep RANDOM_PER_PARTICIPANT, but generate and persist the finite question sequence only once when the session starts.
5. Enforce exactly 20 seconds per question using server-side question start timestamps.
6. On timeout, record the question as unanswered with 0 points and advance normally.
7. Mark the session COMPLETED only after the final persisted question is answered or times out.
8. Never return another question once the session is COMPLETED.
9. Prevent duplicate answer/timeout submissions and race conditions.
10. Do not change the existing scoring formula or quiz configuration.
