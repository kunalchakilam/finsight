Update public quiz scoring using the existing ISQuest scoring scheme.
Standard question: 600 base points; Double Points: 1200 base points.
Time bonus is up to 400 points and decreases as response time increases.
Maximum score: 1000 for Standard and 1600 for Double Points.
Incorrect and unanswered answers receive 0 points.
Calculate response time using server timestamps, never the browser timer.
For each submitted answer return selectedAnswer, correctAnswer, correct, earnedPoints and answerStatus.
answerStatus must be CORRECT, INCORRECT or UNANSWERED.
On completion return totalScore, correctCount, incorrectCount, unansweredCount and totalTimeSeconds.
Do not expose scoring internals that are unnecessary for the frontend.
