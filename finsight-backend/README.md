Integrate Experience Center sessions with the existing immersive quiz engine.

1. After Experience Center START, use the existing quiz question/session APIs wherever possible.
2. The participant's persisted question sequence remains authoritative.
3. Support the existing SAME_FOR_EVERYONE and RANDOM_PER_PARTICIPANT selection modes.
4. Support the existing 20-second per-question timer.
5. Support Standard, Spin the Wheel and RANDOM presentation modes.
6. Reuse existing answer validation and scoring.
7. Reuse existing timeout handling and active-answering-time calculation.
8. Reuse existing completion and final-result logic.
9. Do not create a second scoring or question progression engine.
10. Ensure every Experience Center attempt has completely independent session state.
11. Normal PUBLIC and PRIVATE quiz behavior must remain unchanged.
