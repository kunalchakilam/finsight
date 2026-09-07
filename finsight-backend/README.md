Improve the ISQuest Topics & Question Bank backend with duplicate detection and Question Edit/Delete APIs.

Do not modify Quiz Management or unrelated features.

1. Duplicate detection

Update the existing QuestionRepository with a way to find a question by:
- topic
- normalized question text

Normalization should:
- trim leading/trailing whitespace
- collapse repeated whitespace
- compare case-insensitively

2. Duplicate rules

A question is considered a duplicate when the normalized question text already exists under the same Topic.

Do NOT treat the same question text in different Topics as a duplicate.

3. Excel import/preview

Update the existing Excel preview validation to detect:
- duplicates within the uploaded Excel file
- duplicates against questions already stored in MySQL

For duplicates within the uploaded file, compare:
Category + normalized Question

For duplicates against MySQL, compare:
Topic + normalized Question

4. Duplicate rows must be marked invalid and must NOT be imported.

Return a clear error such as:
"Duplicate question already exists in this topic."

For duplicates within the same Excel file:
"Duplicate question found in uploaded file."

5. Preserve the existing preview response structure as much as possible.

6. Question Edit API

Implement:
PUT /api/questions/{id}

Accept a request containing:
- topicId
- contributedBy
- question
- option1
- option2
- option3
- option4
- correctAnswer

Validate all required fields.

Correct Answer must match the value of one of the four options.

7. During update, perform duplicate detection using:
topic + normalized question

Exclude the current question ID from the duplicate check so a question can be saved without changing its text.

8. Question Delete API

Implement:
DELETE /api/questions/{id}

Delete the question if it exists.

Return an appropriate success response.
Return 404 when the question does not exist.

9. Update QuestionService with:
- updateQuestion(...)
- deleteQuestion(...)

Keep entity-to-response mapping in the existing service pattern.

10. Create/update request DTOs under the existing model package.
Do not expose JPA entities directly.

11. After updating or deleting a question, the existing:
GET /api/topics/{topicId}/questions
must immediately return the updated question list.

12. Ensure Topic question counts returned by:
GET /api/topics
remain accurate after question creation, update and deletion.

13. Use the existing exception-handling approach.

14. Keep the existing local Excel storage implementation.
Do not add S3 or Bedrock changes.

15. Do not break the existing:
GET /api/topics
GET /api/topics/{id}
GET /api/topics/{topicId}/questions
GET /api/questions/{id}
POST /api/questions/import/preview
POST /api/questions/import

16. Verify the project compiles and test:
- duplicate in Excel
- duplicate against database
- updating a question
- deleting a question
- deleting a nonexistent question
- updating without creating a duplicate.
