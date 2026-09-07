Check the existing Quiz backend after the Create Quiz implementation.

Verify whether GET /api/quizzes/{id} exists and returns:
- quiz basic details
- participant count/status/visibility/owner
- saved topic/question configuration
- point type information

If it already exists and provides this data, make no changes.

If missing, implement only the minimal GET /api/quizzes/{id} endpoint using the existing Quiz service, repository, entities and QuizResponse patterns.

Return 404 when the quiz does not exist.
Do not modify quiz creation or other existing APIs.
