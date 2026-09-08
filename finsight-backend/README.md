Complete the public quiz final-result and leaderboard flow.
When the participant answers or times out on the final question, mark the session COMPLETED.
Calculate and persist final score, correct count, incorrect count, unanswered count and total completion time.
Return these values from GET /api/public/quiz-sessions/{sessionId}/result.
Return the top 5 completed participants for that quiz, ranked by score descending.
Use total completion time as the tie-breaker for equal scores.
Also return the current participant's rank, score, name and statistics.
If the participant is already in the top 5, do not duplicate them outside the leaderboard.
Never expose SSO or email in leaderboard data.
