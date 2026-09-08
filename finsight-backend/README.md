Fix the public quiz answer flow: every selected answer is currently marked incorrect and the question never advances.
Inspect the existing answer controller, service, QuizParticipant/session and Question entities before changing code.
Compare selectedAnswer with the stored Question.correctAnswer using normalized trimmed, case-insensitive values.
Return correct=true only when the actual answer values match.
After a valid submission, persist the participant's answer, score and question progression.
Ensure the session advances to the next eligible question after each submission.
When the final question is answered, mark the session COMPLETED and do not return another question.
Prevent duplicate submissions for the same question.
Return correct, earnedPoints, questionNumber, nextQuestionAvailable and completed.
Keep the existing 20-second limit and scoring rules.
