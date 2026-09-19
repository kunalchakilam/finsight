Audit and simplify the existing ISQuest backend before adding any new endpoint.
1. Inspect every controller, service, repository, entity, DTO/model and utility currently used by quiz functionality.
2. Identify duplicate implementations, especially PublicQuiz, PublicQuestion and separate public session classes.
3. Reuse the existing Quiz, Question, Topic, User and QuizParticipant/session entities for all quiz access modes.
4. Keep one shared QuizService, QuestionService, TopicService and QuizSessionService.
5. Keep separate controllers only when the access flow genuinely differs.
6. Do not create duplicate quiz engines, question services, repositories or entities.
7. Ensure normal portal and public quiz flows continue using the same shared quiz/session logic.
8. Remove obsolete duplicate classes only after checking all references.
9. Preserve all existing API contracts and frontend functionality.
10. Do not implement Experience Center, Redis or any new feature in this step.
