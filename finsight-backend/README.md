Fix answer validation in the public quiz answer API.
Inspect how selectedAnswer and Question.correctAnswer are currently stored and compared.
Normalize both values using trim and case-insensitive comparison.
Validate against the actual option value, not option letter/index.
Return the stored correct option value only after submission.
Ensure every question's correctAnswer matches exactly one of option1, option2, option3 or option4.
If an invalid question is detected, return a clear backend error instead of silently marking it incorrect.
Prevent duplicate submissions for a completed/current question.
Do not change the scoring formula in this step.
