Create the Experience Center Instructions screen.

1. Navigate here after successful registration.
2. Show a concise "How to Play" section with 5–6 points.
3. Dynamically show total number of questions.
4. Show 20 seconds per question from backend configuration.
5. Explain the existing scoring rule without exposing internal formulas.
6. Display Standard Quiz or Spin the Wheel presentation mode.
7. If presentationMode is RANDOM, explain that the mode is selected for this attempt.
8. Mention that participants can play multiple attempts.
9. Add a prominent START QUIZ button.
10. START QUIZ calls POST /api/experience/sessions/{sessionId}/start.
11. Navigate into the existing immersive quiz UI.
12. Do not duplicate question, timer, scoring or result components.
