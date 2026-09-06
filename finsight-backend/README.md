Refactor the current Quiz Management feature structure without changing its UI, behavior or functionality.

1. Move the Quiz Management feature out of src/components/quizManagement and place it under:
   src/features/quizManagement/

2. Inside src/features/quizManagement/, keep all Quiz Management-specific JSX/JS files directly in the feature folder:
   - QuizManagement.jsx
   - QuizCard.jsx
   - QuizPageHeader.jsx
   - QuizSearch.jsx
   - QuizStats.jsx
   - quizStats.js

3. Create only one subfolder inside the feature:
   src/features/quizManagement/data/

4. Move mockQuizzes.js into:
   src/features/quizManagement/data/mockQuizzes.js

5. REMOVE the separate "pages" folder for this feature. QuizManagement.jsx should be the feature's main page/component directly inside quizManagement.

6. REMOVE the separate "components" folder inside the feature. Do not create another components folder.

7. Update all imports, exports and routing references so the application continues working exactly as before.

8. Do not move or modify globally reusable components such as the shared header, sidebar or footer. Those should remain under the existing src/components/layout structure.

9. Do not change any styling, UI, mock data, functionality, dependencies or application behavior.

10. Do not create services, hooks or additional folders yet. We will introduce them only when required for backend integration.

11. Keep the final structure as:
    src/features/quizManagement/
      QuizManagement.jsx
      QuizCard.jsx
      QuizPageHeader.jsx
      QuizSearch.jsx
      QuizStats.jsx
      quizStats.js
      data/
        mockQuizzes.js

12. Verify that all imports resolve correctly and the application builds successfully after the refactor.
