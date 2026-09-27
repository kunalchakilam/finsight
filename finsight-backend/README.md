Update the frontend to match the new role permissions.

1. SUPER_ADMIN Create Quiz continues showing Public, Private and Experience Center visibility options.
2. ADMIN Create Quiz must show only Private visibility; hide Public and Experience Center completely.
3. ADMIN can still configure private quizzes and select questions from the existing Question Bank.
4. Hide Upload Questions/Excel Import/bulk question creation controls from ADMIN.
5. Keep existing topic/question browsing and selection available to ADMIN.
6. Hide Admin Management navigation and routes from ADMIN.
7. SUPER_ADMIN retains all existing Admin Management and Question Bank controls.
8. Do not rely on frontend restrictions for security; backend authorization remains authoritative.
9. Do not change USER UI or unrelated quiz functionality.
10. Preserve all existing ISQuest styling, layouts and API integrations.
