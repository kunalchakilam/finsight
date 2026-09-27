Enforce the new ADMIN permissions across the existing quiz and question APIs.

1. SUPER_ADMIN can create PUBLIC, PRIVATE and EXPERIENCE_CENTER quizzes.
2. ADMIN can create PRIVATE quizzes only.
3. Reject ADMIN requests attempting PUBLIC or EXPERIENCE_CENTER quiz creation with 403.
4. Only SUPER_ADMIN can upload/import/bulk-create questions.
5. ADMIN must be rejected from Excel upload/import and bulk question creation APIs.
6. ADMIN can read existing topics/questions and select existing Question Bank questions when creating PRIVATE quizzes.
7. Derive all permissions from the authenticated backend user's role; never trust frontend role values.
8. Keep SUPER_ADMIN Question Bank functionality unchanged.
9. Keep existing quiz creation, scheduling, question selection, scoring and session behavior unchanged.
10. Keep USER permissions unchanged.
11. Audit all relevant endpoints for any alternate route that could bypass these restrictions.
