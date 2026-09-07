Fix the Quiz details API used by the Manage Quiz page.

Inspect the current Quiz entity, Quiz configuration entities, repositories, service and QuizResponse.

GET /api/quizzes/{id} must return the ACTUAL persisted data for that quiz:
- id
- name
- description
- status
- visibility
- ownerName
- participantCount
- createdAt
- configured topics
- pool type and pool size
- questions per participant
- selection mode
- configured question IDs
- Standard/Double point type for configured questions
- time per question

Do not calculate or hardcode quiz configuration values in the frontend.

If the existing QuizResponse is insufficient, create/update the DTO and service mapping only.
Reuse existing entities and repositories.
Return 404 when quiz ID does not exist.
Do not change quiz creation behavior.
