Implement the Experience Center leaderboard.

1. Add GET /api/experience/quizzes/{quizId}/leaderboard.
2. Include only COMPLETED attempts for that EXPERIENCE_CENTER quiz.
3. Group attempts by SSO.
4. For each SSO, keep only their highest completed score.
5. If scores are equal, use cumulative active answering time as the tie-breaker.
6. Return rank, participant name and score only.
7. Return the top 3 for the podium and top 20 ranked participants.
8. The same SSO must never occupy multiple leaderboard positions.
9. Do not expose SSO, email or authentication information.
10. Reuse existing participant/result data; do not create a separate leaderboard entity.
11. Keep normal quiz leaderboards unchanged.
