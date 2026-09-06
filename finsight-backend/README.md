11. Remove the frontend mock quiz data completely.

- Delete:
  src/features/quizManagement/data/mockQuizzes.js

- Remove all imports/references to mockQuizzes.js.
- QuizManagement.jsx must use only the backend API for quiz data.
- Do not keep fallback mock data in the component.
- Do not hardcode quiz objects anywhere in the Quiz Management feature.

12. The API response should now be the single source of truth for:
- Quiz cards
- Quiz status
- Visibility
- Owner
- Participant count
- Quiz Management statistics

13. If the API fails, show the existing/simple error state:
"Unable to load quizzes."
Do not silently fall back to mock data.

14. After removing the mock data, verify there are no remaining imports or references to mockQuizzes.js anywhere in the Quiz Management feature.
