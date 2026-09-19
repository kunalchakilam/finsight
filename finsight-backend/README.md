Fix the quiz total time calculation to measure only active question-answering time.
1. Do not calculate total time as quizCompletedAt minus quizStartedAt.
2. Track the time spent on each individual question using its server-side question start timestamp.
3. When an answer is submitted, calculate only the elapsed time for that question.
4. Add each question's response time to the participant's cumulative total.
5. If a question times out without an answer, count its full 20 seconds.
6. Do not include time spent waiting before the next question, API/loading delays, result-screen time or idle time.
7. Persist the cumulative active answering time with the completed participant result.
8. Return this value as totalTimeTaken in the final result API.
9. Keep the existing 20-second-per-question timer and scoring formula unchanged.
10. Use the server timestamp as the authoritative source for response-time calculation.
