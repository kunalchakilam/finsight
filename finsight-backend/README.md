Update the existing Topic backend to support topic descriptions.

Do not change the Question entity, Quiz Management feature, Excel import, authentication, or any unrelated functionality.

1. Update the existing Topic entity:
- Add:
  description: String
- Keep it optional for now.
- Keep all existing Topic fields and relationships unchanged.

2. Update TopicResponse:
- Add:
  description

3. Update TopicService mapping so the description is returned in TopicResponse.

4. Update the database schema/SQL for the topics table according to the project's existing database approach:
- Add a description column.
- Do not recreate or drop existing topic/question data.

5. If the project uses JPA schema generation rather than SQL migrations, follow the existing configuration instead of introducing a new migration mechanism.

6. For existing topics, allow description to be null/empty for now.
Do not invent descriptions in the backend.

7. Verify:
GET /api/topics
GET /api/topics/{id}
still work and now include:
- id
- name
- description
- questionCount

8. Keep the existing API response fields unchanged apart from adding description.

9. Verify the project compiles successfully.
