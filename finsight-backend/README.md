Create the dedicated Experience Center entry flow at /is-echkc.

1. This route must be separate from the normal ISQuest portal.
2. Do not render Header, Sidebar, Profile, Login or normal portal navigation.
3. On entry, call GET /api/experience/quizzes/active.
4. Show the active quiz name and description.
5. Show a registration card with Name and 9-digit SSO fields.
6. Add a small "View Leaderboard" button/icon beside the registration card.
7. Register through POST /api/experience/quizzes/{quizId}/register.
8. Store the returned sessionId and quiz configuration.
9. Navigate to the Instructions screen after registration.
10. Do not call normal authenticated quiz APIs.
11. Allow the same SSO to register again as a new attempt.
12. Keep this UI visually separate from the management portal.
