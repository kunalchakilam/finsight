Fix the immersive quiz frontend so question order is completely controlled by the backend.
1. Never generate, shuffle or randomize questions on the frontend.
2. Always render the question returned by the current quiz-session API.
3. Keep the same sessionId throughout the entire attempt.
4. After Next, answer or timeout, request the next question from the backend.
5. Never calculate the next question using a local question array or random function.
6. Reset answer selection and the 20-second timer only when a genuinely new question is received.
7. Prevent duplicate answer, timeout and Next API calls.
8. Keep the existing immersive UI and scoring display unchanged.
