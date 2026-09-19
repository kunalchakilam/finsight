Implement the Spin the Wheel immersive presentation for landscape laptop/desktop screens.
1. Split the screen into equal left and right halves.
2. Left side shows the wheel; place a prominent SPIN button in its center.
3. Right side initially shows a prompt to spin and no question timer.
4. Clicking SPIN calls the backend spin endpoint and animates the wheel for exactly 3 seconds.
5. Animate the wheel to the backend-returned wheel position, then display that question on the right.
6. Start the strict 20-second question timer only after the wheel stops.
7. Selecting an answer immediately stops the timer and shows correct/incorrect feedback.
8. Clicking anywhere after feedback advances to the score/result state with a NEXT button.
9. NEXT returns to the wheel with the completed question removed.
10. Do not show another spin after the final question; go directly to the existing final result screen.
11. Use short wheel labels such as Q1 + Topic Name, not full question text.
12. Keep backend question selection authoritative and never randomize questions locally.
