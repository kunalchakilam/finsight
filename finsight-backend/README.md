Add quiz owner information to the existing quiz creation flow.
1. Inspect the existing User authentication/session and Quiz entity before making changes.
2. Add createdBy and ownerName fields to the Quiz entity if they do not already exist.
3. createdBy should store the authenticated creator's User ID/reference.
4. ownerName should store the creator's current display name.
5. During POST /api/quizzes, get the authenticated user's details from the backend security context/session; never accept ownerName from the frontend request.
6. Populate createdBy and ownerName automatically when creating the Quiz.
7. Persist both values in the database.
8. Update quiz response DTOs/models to return ownerName and createdBy where appropriate.
9. Existing quizzes without owner information should not break existing APIs.
10. Do not create a separate owner entity or duplicate User data.
