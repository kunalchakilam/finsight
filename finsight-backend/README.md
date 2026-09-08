Diagnose why GET /api/public/quiz-sessions/{sessionId}/question returns "No questions are available".
Do not modify code yet.
Trace the flow from Quiz creation → persisted topic/question configuration → participant session → current question.
Verify the quiz session references the correct quiz.
Verify the quiz's topic configurations and selected question IDs exist in the database.
Verify questions are actually present for those topics.
Check both "USE_ALL" and manual question selection handling.
Identify the exact missing/broken mapping and report the affected entity, repository/service and method.
Do not create duplicate entities or change the API contract.
