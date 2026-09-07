Add Quiz edit and delete support using the existing Quiz architecture.

Implement:
- GET /api/quizzes/{id}
- PUT /api/quizzes/{id}
- DELETE /api/quizzes/{id}

PUT should update the complete quiz configuration:
- basic details
- topic/pool configuration
- questions per participant
- selection mode
- selected question IDs
- Standard/Double point configuration

Validate the same rules used during Quiz creation.

DELETE should return 404 if the quiz does not exist and remove its
quiz-specific configuration safely.

Reuse existing entities, repositories, services and DTOs.
Use a transaction for update/delete.
Do not delete the underlying Topic or Question records.
