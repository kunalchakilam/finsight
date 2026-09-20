Update only the Spin the Wheel presentation UI according to these requirements.
1. For N remaining questions, render exactly N wheel segments; remove each completed question from the wheel.
2. Use a simple charcoal-gray wheel with subtle lighter-gray segment borders/dividers; do not use different colors for segments.
3. Display each segment as "Q[number] - [Topic Name]" using neon amber #FFB700 text.
4. The first spin must show all questions from Q1 through QN before spinning.
5. On every later spin, show only the remaining questions and completely remove the completed question.
6. Keep the backend-selected question authoritative; animate the wheel to the returned segment.
7. Spin animation must last 3 seconds and stop on the backend-selected question.
8. When the wheel stops, highlight only the selected segment using the existing neon amber highlight treatment.
9. Keep the selected segment highlighted while its question, options and 20-second timer are displayed.
10. Continue removing completed questions until only one remains.
11. For the final remaining question, display the wheel with that single segment but do not show or trigger a SPIN action; display the question directly after NEXT.
12. Do not change the existing answer, feedback, scoring or final-result screens.
13. Keep the existing landscape 50/50 left-wheel/right-question layout.
