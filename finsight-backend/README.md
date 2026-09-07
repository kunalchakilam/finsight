Update backend support for Create Quiz Step 2.

Use existing Topic and Question entities/repositories.

Ensure:
- GET /api/topics returns id, name, description, questionCount.
- GET /api/topics/{topicId}/questions returns existing QuestionResponse data.

No quiz configuration should be persisted yet.

Add only minimal DTO/service changes needed for the frontend to:
- view available questions by topic
- manually select questions
- identify question IDs for point configuration

Do not create new duplicate Topic/Question entities or APIs.
Keep existing endpoints working.
