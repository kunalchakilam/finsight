Implement the backend API for final Quiz creation.

Use the existing Quiz, Topic, and Question entities and existing repository/service patterns.

Create:
- CreateQuizRequest DTO containing:
  name, description, visibility,
  topic configurations,
  questionsPerParticipant,
  selectionMode,
  selectedQuestionIds,
  questionPointTypes.

- POST /api/quizzes

The request must support:
- multiple topics
- entire-topic pool or manually selected question IDs
- same questions or random per participant
- Standard or Double point type per question

Validate:
- quiz name required
- at least one topic
- questionsPerParticipant > 0
- questionsPerParticipant cannot exceed pool size
- manually selected questions must belong to the configured topic

Create the Quiz and persist its question/topic configuration transactionally.

Do not randomly select participant questions during quiz creation; that happens when a participant starts the quiz.

Reuse existing entities where possible. Do not create duplicate Topic/Question APIs.
Return the created quiz using the existing QuizResponse structure.
