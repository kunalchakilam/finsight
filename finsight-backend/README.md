Refactor the global immersive quiz completion flow so results and leaderboard are separate screens.

1. After quiz completion, show only the participant's personal results first.
2. Keep the existing total score, Correct, Incorrect, Unanswered and Total Time Taken statistics.
3. Do NOT show the leaderboard directly on the initial results screen.
4. Add a prominent "View Leaderboard" button below the personal statistics.
5. Clicking View Leaderboard opens a dedicated leaderboard screen using the same charcoal/amber immersive theme.
6. Show the top 3 participants first in a podium layout with Gold, Silver and Bronze medal indicators beside their names and scores.
7. Below the podium, show the ranked Top 20 participants with rank, name and score.
8. If the current participant is within the Top 20, highlight their row.
9. If the current participant is outside the Top 20, show their rank, name and score in a separate "Your Rank" section below the Top 20.
10. Do not duplicate the current participant inside the Top 20 and Your Rank section.
11. Keep the leaderboard styling consistent with the new global quiz theme.
12. Add a clear way to return from the leaderboard to the personal results screen.
13. Do not change score calculation, ranking, tie-breaking or backend session logic.
14. Do not change the Experience Center-specific leaderboard behavior.
