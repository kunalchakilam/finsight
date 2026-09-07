Implement only the backend support required for Create Quiz Step 2.

First inspect the existing Topic and Question implementation:
- Topic.java
- Question.java
- TopicRepository.java
- QuestionRepository.java
- existing TopicController/QuestionController
- TopicService/QuestionService
- TopicResponse.java
- QuestionResponse.java

Do NOT create new Topic/Question entities, repositories, controllers, or duplicate APIs.

Requirements:
1. Verify GET /api/topics already returns:
   id, name, description, questionCount.
   If already implemented, leave it unchanged.

2. Verify GET /api/topics/{topicId}/questions returns all questions for that topic with:
   id, topicId, topicName, contributedBy, question,
   option1, option2, option3, option4, correctAnswer.

3. Ensure questions are returned with their database IDs so the frontend can manually select questions.

4. If any existing service/DTO/repository code is missing for the above,
   make only the minimal changes required.

5. GET /api/topics/{topicId}/questions should return 404 if the topic does not exist.

6. Do NOT create or persist any Quiz Step 2 configuration yet.
   Do NOT modify Quiz creation logic.

7. Keep all existing Topic and Question APIs working.

After implementation, provide the files changed and briefly explain the changes.
