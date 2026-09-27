Separate personal quiz results from leaderboard data without changing scoring.

1. Keep the existing final result API responsible for the participant's personal statistics only.
2. Return totalScore, correct, incorrect, unanswered and totalTimeTaken.
3. Do not remove existing fields unless they are specifically leaderboard fields.
4. Provide/use the existing leaderboard endpoint separately for leaderboard data.
5. The leaderboard endpoint must return top 3 podium data and top 20 ranked participants.
6. Return the current participant's rank, name and score so the frontend can display "Your Rank" when outside the Top 20.
7. Preserve the existing score ranking and active-answering-time tie-breaker.
8. Do not change scoring, session completion or quiz progression.
9. Keep PUBLIC, PRIVATE and EXPERIENCE_CENTER leaderboard behavior working.
