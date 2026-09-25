Restrict EXPERIENCE_CENTER quizzes to the dedicated Experience Center access flow.

1. Audit existing quiz discovery/list APIs.
2. Normal Join a Quiz APIs must exclude EXPERIENCE_CENTER.
3. Normal Active, Upcoming and Completed participant lists must exclude EXPERIENCE_CENTER.
4. Public quiz discovery must exclude EXPERIENCE_CENTER.
5. Authenticated admins must still see their EXPERIENCE_CENTER quizzes in Quiz Management.
6. Add a dedicated /api/experience/ namespace for participant access.
7. Only /api/experience/... may expose EXPERIENCE_CENTER quizzes to unauthenticated participants.
8. Reuse existing Quiz, Question and session services.
9. Do not duplicate quiz retrieval logic.
10. Do not change PUBLIC or PRIVATE behavior.
