Add Experience Center as a new quiz visibility/access type.

1. Add EXPERIENCE_CENTER to the existing Quiz visibility enum/model.
2. Keep PUBLIC and PRIVATE behavior unchanged.
3. Persist EXPERIENCE_CENTER using the existing Quiz entity.
4. POST /api/quizzes must accept EXPERIENCE_CENTER.
5. EXPERIENCE_CENTER quizzes must remain visible to authorized admins in Quiz Management.
6. Normal participant/public discovery APIs must exclude EXPERIENCE_CENTER.
7. EXPERIENCE_CENTER participants must not require Okta or dev authentication.
8. Preserve existing scheduling, question selection, scoring and presentation configuration.
9. Do not create separate Quiz or Question entities.
10. Do not implement participant access in this step.
