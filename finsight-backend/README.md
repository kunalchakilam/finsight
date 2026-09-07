Update QuizManage.jsx to display the actual Quiz details API response.

Requirements:
1. Remove all hardcoded/mock quiz configuration values.
2. Map every displayed value directly from the API response.
3. Show:
   - Quiz name, description
   - Status, visibility
   - Owner, participant count, created date
   - Topic configurations
   - Pool type and pool count
   - Questions per participant
   - Selection mode
   - Standard/Double question counts
   - Time per question

4. Add an Actions section:
   - Host Quiz
   - Edit Quiz
   - Delete Quiz
5. Host Quiz should currently be a placeholder action only.
6. Edit Quiz should navigate to the existing Create Quiz flow with the quiz ID
   so we can load and edit the existing configuration.
7. Delete Quiz should show a confirmation dialog before calling the delete API.
8. Add the required GET/PUT/DELETE quiz methods to src/api.js if missing.
9. After successful deletion, navigate back to Quiz Management and refresh the list.
10. Handle loading, API errors and 404 cleanly.
11. Keep the UI consistent with the existing ISHack-style design.
12. Do not implement Share yet, but keep the Actions area structured so a
    future "Share Quiz" action can be added for Public quizzes.
