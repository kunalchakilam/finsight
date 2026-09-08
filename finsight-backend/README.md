Fix the immersive Quiz screen answer flow.
Inspect the existing answer submission and question-loading logic before changing it.
After an answer is submitted, display the returned correct/incorrect result and earned points.
After the result state, request the next question using the SAME participant sessionId.
Do not reuse or cache the previous question response.
If nextQuestionAvailable is false or completed=true, stop the quiz and show the final result screen.
Reset the 20-second timer whenever a new question loads.
Reset selectedAnswer and answer state for every new question.
When the timer reaches zero, submit the unanswered response exactly once.
Prevent duplicate answer API calls from clicks or timer events.
Keep the existing gamified UI unchanged.
