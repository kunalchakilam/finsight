Fix the immersive quiz frontend to respect backend question progression.
After each answer result, request the next question using the same sessionId.
If the backend returns completed=true or no next question, stop requesting questions.
Immediately transition to a temporary "Quiz Complete" placeholder instead of requesting again.
Never generate, randomize or advance question IDs on the frontend.
Do not cache the previous question as the next question.
Reset answer selection and timer only when a genuinely new question is received.
Prevent multiple next-button clicks from triggering duplicate requests.
Keep the existing Kahoot-style UI unchanged.
