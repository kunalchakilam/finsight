Implement the backend question flow for an active public quiz session.
Reuse the existing Quiz, Question and participant session entities.
GET /api/public/quiz-sessions/{sessionId}/question returns the current question and four options.
Never return correctAnswer to the frontend.
POST /api/public/quiz-sessions/{sessionId}/answer accepts questionId and selectedAnswer.
Use the server timestamp to enforce the fixed 20-second limit.
Calculate correctness and points entirely on the server.
Return correctness, earnedPoints, nextQuestionAvailable and questionNumber.
Prevent duplicate submissions for the same question.
Advance the participant session only after a valid answer or timeout.
