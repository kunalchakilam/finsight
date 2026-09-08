Fix the existing immersive public quiz frontend to match the backend state exactly.

1. Fix leaderboard display using the result API response; show top 5 rank, participant name and score.
2. For incorrect answers, display the correctAnswer returned by the API instead of "answer not provided".
3. Use the backend's persisted question sequence and configured total question count; never calculate or randomize it on the frontend.
4. Remove any overall quiz timer.
5. Start a strict 20-second timer whenever a new question is received.
6. When 20 seconds expires, submit that question as unanswered exactly once.
7. Do not trigger quiz completion randomly from frontend timer/state logic.
8. Only show QUIZ COMPLETE when the backend confirms the session is completed or the final result is returned.
9. Prevent duplicate Next, answer and timeout API calls.
10. Keep the existing immersive UI and scoring display unchanged.
