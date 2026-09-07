Complete the Manage action on Quiz Management quiz cards.

Create QuizManage.jsx inside:
src/features/quizManagement/

Requirements:
1. Clicking "Manage →" on QuizCard should navigate to the quiz management page using the quiz ID.
2. Do not pass the entire quiz object through navigation state.
3. Fetch the quiz details from the backend using the quiz ID.
4. Add the required API method to src/api.js, reusing the existing axios instance.
5. Show:
   - Quiz name
   - Description
   - Status
   - Public/Private
   - Owner
   - Created date
   - Participant count
6. Show a Question Configuration section when configuration data is available:
   - Topics
   - Pool type/count
   - Questions per participant
   - Selection mode
   - Standard/Double question counts
   - 20 seconds per question
7. Add "Back to Quiz Management".
8. Handle loading, not-found, and API error states cleanly.
9. Use the existing ISHack-style light UI and existing Header/Sidebar/Footer.
10. Do not implement Edit, Host, Leaderboard, Delete, or Insights actions yet.
11. Keep QuizCard layout unchanged except for wiring the existing Manage button.
