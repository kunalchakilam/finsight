Remove the temporary/mock quiz records from the backend.

Search the project for the seeded quiz data:
- "September Innovation Challenge"
- "AML Awareness Challenge"

Remove only the code/SQL responsible for creating these mock Quiz records.

Do not remove the Quiz entity, repository, service, controller, API, or schema.
Do not modify Topic/Question seed data.
Do not change Quiz API behavior.

After the change, the application should start with zero seeded quizzes unless a real quiz is created through POST /api/quizzes.
