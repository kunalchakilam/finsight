Support Create Quiz Step 2 question-bank configuration.

Use the existing Topic and Question entities/repositories.

Add/update APIs:
1. GET /api/topics
   Return topics with id, name, description, questionCount.

2. GET /api/topics/{topicId}/questions
   Return questions for the selected topic.

Add any minimal service/DTO changes required for these APIs.

For Create Quiz configuration, do NOT persist anything yet.
The frontend will submit the complete quiz configuration only after the Review step.

Reuse existing TopicResponse, QuestionResponse, services and repository patterns where possible.
Do not create duplicate entities or controllers.
Keep existing APIs working.
