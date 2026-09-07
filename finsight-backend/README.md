Build the backend foundation for the first step of the ISQuest Create Quiz flow.

Use the existing Spring Boot package:
com.syf.isquest.api

Use the existing folders:
entity, repository, service, controller, model, exception

Do NOT implement question selection, custom questions, quiz sessions, scoring, leaderboards, or authentication yet.

1. Update the existing Quiz entity to support the Create Quiz requirements.

Quiz fields should include:
- id: Long
- name: String, required
- description: String
- status: existing ACTIVE/COMPLETED status
- visibility: existing PUBLIC/PRIVATE visibility
- ownerName: String
- participantCount: Integer
- createdAt: LocalDateTime
- updatedAt: LocalDateTime

Do not unnecessarily remove or rename existing fields.

2. Create/update a request DTO:
CreateQuizRequest

For this first step it should contain:
- name
- description
- visibility

3. Create/update the response DTO:
QuizResponse

Ensure the existing Quiz Management GET APIs continue returning their existing fields.

4. Add:
POST /api/quizzes

The endpoint should accept CreateQuizRequest.

5. Validate:
- name is required
- name should have a reasonable maximum length
- description should have a reasonable maximum length
- visibility is required

6. Do not allow the client to set:
- id
- participantCount
- createdAt
- updatedAt

7. New quizzes should initially use the appropriate existing default status.
Do not allow the frontend to arbitrarily set quiz status.

8. Owner handling:
Keep the existing ownerName approach for now because authentication/user identity is not being implemented in this slice.

9. Add the corresponding service method:
createQuiz(CreateQuizRequest request)

10. Save the Quiz using the existing QuizRepository.

11. Return the created quiz using QuizResponse.

12. Use appropriate HTTP status:
201 CREATED for successful creation.

13. Keep existing GET/search Quiz Management APIs working.

14. Do not implement QuestionBank relationships yet.
Do not create QuizTopicConfiguration yet.

15. Do not implement quiz creation from the frontend yet.
The frontend Step 1 should continue to hold the data until the final Create Quiz action is implemented.

16. Follow existing exception handling and validation conventions.

17. Verify the project compiles successfully and POST /api/quizzes works independently in Postman.
