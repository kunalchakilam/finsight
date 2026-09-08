Update the completed quiz result and leaderboard APIs.
Leaderboard must rank participants by totalScore descending.
Use total completion time as the tie-breaker when scores are equal.
Return the top 3 participants for the participant result screen.
Also return the current participant's rank, name and score.
Return correct, incorrect and unanswered counts for the current participant.
Never expose participant SSO or email.
Ensure incomplete/active sessions are excluded from the completed leaderboard.
Reuse existing QuizParticipant/session data instead of creating duplicate models.
