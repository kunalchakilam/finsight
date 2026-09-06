Build the Topics & Question Bank backend foundation for ISQuest using the existing Spring Boot project structure.

Package:
com.syf.isquest.api

Use the existing folders:
entity, repository, service, controller, model, exception

Do NOT modify Quiz Management, Excel import, frontend, authentication, leaderboard, or other features.

1. Create Topic entity:
- Table: topics
- id: Long, primary key, auto-generated
- name: String, required, unique
- createdAt: LocalDateTime
- updatedAt: LocalDateTime
- Use Lombok and JPA annotations consistent with the existing project.

2. Create Question entity:
- Table: questions
- id: Long, primary key, auto-generated
- topic: ManyToOne relationship with Topic
- contributedBy: String, required
- question: String, required
- option1: String, required
- option2: String, required
- option3: String, required
- option4: String, required
- correctAnswer: String, required
- createdAt: LocalDateTime
- updatedAt: LocalDateTime
- Use a proper foreign-key relationship from questions to topics.

3. Create repositories:
TopicRepository extends JpaRepository<Topic, Long>
QuestionRepository extends JpaRepository<Question, Long>

Add a QuestionRepository method to retrieve questions by topic ID.

4. Create response models:
TopicResponse:
- id
- name
- questionCount

QuestionResponse:
- id
- topicId
- topicName
- contributedBy
- question
- option1
- option2
- option3
- option4
- correctAnswer

Do not expose JPA entities directly from controllers.

5. Create TopicService:
- getAllTopics()
- getTopicById(Long id)
- Return TopicResponse.
- Include the number of questions belonging to each topic.

6. Create QuestionService:
- getQuestionsByTopic(Long topicId)
- getQuestionById(Long id)
- Return QuestionResponse.

7. Create TopicController:
Base path:
GET /api/topics
GET /api/topics/{id}

8. Create QuestionController:
Base path:
GET /api/topics/{topicId}/questions
GET /api/questions/{id}

9. Use appropriate HTTP status codes and ResponseEntity where consistent with the existing project conventions.

10. Add basic not-found handling using the existing exception structure. Do not create an elaborate exception framework if one already exists.

11. Do not add POST/PUT/DELETE APIs yet. We will add question creation/editing after Excel import is implemented.

12. Do not add mock or hardcoded question data inside Java code.

13. If database schema initialization is already handled through the existing resources/sql approach, add the required tables there. Otherwise rely on the existing JPA configuration.

14. Preserve the existing Quiz entity and its APIs. Do not modify them unless absolutely required for compilation.

15. Verify the project compiles successfully and the following endpoints work:
- GET /api/topics
- GET /api/topics/{id}
- GET /api/topics/{topicId}/questions
- GET /api/questions/{id}

Keep the implementation simple and aligned with the existing project conventions. Do not introduce additional packages, mappers, DTO frameworks, or unnecessary abstractions.
