Implement Spin the Wheel as a presentation mode using the existing quiz/session engine.
1. Add presentationMode to Quiz: STANDARD, SPIN_WHEEL, RANDOM.
2. RANDOM must resolve once per participant session to either STANDARD or SPIN_WHEEL.
3. Keep question selection mode independent from presentationMode.
4. For SPIN_WHEEL, maintain the participant's remaining question sequence in the existing session.
5. Add a spin endpoint that selects exactly one remaining question server-side.
6. Return the selected question and its wheel position/index; never let the frontend choose the question.
7. Remove the selected question from the remaining set so it cannot appear again.
8. Start the question's server-side 20-second timer only when the spin selection is completed.
9. Reuse existing answer, timeout, scoring, completion and result logic.
10. On the final question, complete the session normally without another spin.
11. Do not create a separate quiz engine or duplicate question/session entities.
