Connect the Experience Center flow to the existing immersive quiz UI.

1. Pass the Experience Center sessionId into the existing quiz engine.
2. Do not create duplicate question, timer, scoring or result components.
3. Use the existing Standard and Spin Wheel presentation modes.
4. Use the existing 20-second question timer.
5. Use the existing answer/result/Next progression.
6. Use the existing final result screen.
7. Preserve the Experience Center session across browser navigation/reload where existing session-resume logic supports it.
8. Never call normal authenticated participant discovery APIs.
9. Keep the immersive quiz UI unchanged unless required for session routing.
10. Ensure completing an Experience Center attempt returns to the Experience Center result/leaderboard flow.
