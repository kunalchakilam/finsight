Implement Redis caching for active quiz sessions without changing existing quiz behavior.
1. Inspect the existing quiz/session/question flow first and reuse existing entities/services.
2. When a participant starts a quiz, load the complete configured question sequence from DB once.
3. Store the active session state in Redis: question sequence, question data/options, current index, question start time, answers, score and answer counts.
4. Keep correctAnswer server-side only; never expose it in the cached frontend question response.
5. All current-question, answer and timeout operations must read/write Redis instead of repeatedly querying DB.
6. Generate RANDOM_PER_PARTICIPANT sequence exactly once and persist it in Redis for the session.
7. Keep SAME_FOR_EVERYONE sequence stable as well.
8. On completion, persist final result/statistics to DB and remove or expire the Redis session.
9. Add a sensible TTL for abandoned sessions.
10. Reuse existing Redis/configuration if present; do not create duplicate quiz/session entities or services.
