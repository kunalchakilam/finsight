Build the backend for the ISQuest Quiz Management feature using the existing Spring Boot project structure.

Project package:
com.syf.isquest.api

Use the existing folders:
entity, repository, service, controller, model, exception, config, util

For this step, implement ONLY Quiz Management backend. Do not build quiz participation, questions, topics, leaderboard, live quiz, authentication, or other features yet.

1. Create Quiz entity:
- Table name: quizzes
- id: Long, primary key, auto-generated
- name: String, required
- description: String
- status: enum with ACTIVE and COMPLETED
- visibility: enum with PUBLIC and PRIVATE
- ownerName: String
- participantCount: Integer
- createdAt: LocalDateTime
- updatedAt: LocalDateTime
- Use Lombok where appropriate.
- Use JPA annotations and validation constraints appropriately.

2. Create enums:
- QuizStatus
- QuizVisibility
Place them in the entity package unless the existing project convention suggests otherwise.

3. Create QuizRepository:
- Extend JpaRepository<Quiz, Long>
- Add a search method to find quizzes by name or description containing the search text, case-insensitive.

4. Create QuizResponse in model package:
- Return only the fields required by the current Quiz Management frontend.
- Do not expose unnecessary database/entity details.

5. Create QuizService:
- getAllQuizzes()
- searchQuizzes(String search)
- Return QuizResponse objects.
- Keep entity-to-response mapping inside the service for now.
- Do not create a separate mapper class yet.

6. Create QuizController:
Base path: /api/quizzes
- GET /api/quizzes → return all quizzes
- GET /api/quizzes?search=term → search by name or description
- Return appropriate HTTP response types.

7. Database:
- Use the existing application.yml datasource configuration.
- Do not create a new database configuration.
- Create the required SQL schema/seed script under the existing resources/sql folder only if that matches the project's current database initialization approach.
- Add exactly these two initial quizzes:
  1. September Innovation Challenge
     ACTIVE, PUBLIC, owner "Innovation Station", 526 participants
  2. AML Awareness Challenge
     COMPLETED, PRIVATE, owner "Priya Sharma", 84 participants

8. Do not hardcode quiz data inside the controller or service.

9. Follow the project's existing coding conventions and package structure.

10. Do not modify the existing AWS, Vault, Security, Bedrock, S3, or unrelated configuration.

11. Add proper exception handling only if required by the existing project pattern.

12. Verify the project compiles successfully and the GET /api/quizzes endpoint works with the seeded data.

Do not implement POST/create quiz yet. The Create Quiz button is still a frontend placeholder.
