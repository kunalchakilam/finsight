Validate Experience Center multi-attempt session behavior.

1. The same SSO can register for the same EXPERIENCE_CENTER quiz multiple times.
2. Every registration must create a separate participant attempt/session.
3. Never overwrite an earlier attempt.
4. Each attempt must have its own question sequence, current question, score, timer and completion state.
5. Closing a browser must not complete the attempt.
6. Reopening an active attempt must resume its existing session where session-resume is supported.
7. Completing one attempt must not affect another attempt.
8. Leaderboard must consider completed attempts according to the existing highest-score-per-SSO rule.
9. Do not change normal PUBLIC/PRIVATE session restrictions.
10. Do not create duplicate session entities or quiz engines.
