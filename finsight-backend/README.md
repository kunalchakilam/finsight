Expose quiz owner information consistently through the existing quiz APIs.
1. Update QuizResponse and all relevant quiz list/detail responses to include ownerName.
2. Include createdBy where it is useful for ownership checks or frontend logic.
3. GET /api/quizzes must return ownerName for every quiz.
4. GET /api/quizzes/{id} must return ownerName.
5. Public quiz detail responses should return ownerName if the UI displays the quiz creator.
6. Do not expose sensitive User fields such as email or authentication information.
7. Reuse the existing Quiz response DTOs instead of creating duplicate owner response classes.
8. Keep all existing response fields and API contracts unchanged apart from the added owner fields.
