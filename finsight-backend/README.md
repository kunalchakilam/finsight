Implement Step 3 of the Create Quiz flow: Review.

Use the existing CreateQuiz.jsx state from Steps 1 and 2.
Do not redesign the existing Step 1 or Step 2 UI.

Requirements:
1. Step indicator:
   Basic Details → Questions → Review
   Review is the active step.

2. Page title: "Review Quiz"
   Description: "Review your quiz configuration before creating it."

3. Show a read-only "Basic Details" section:
   - Quiz Name
   - Description
   - Visibility: Public/Private
   Add an "Edit" action that returns to Step 1.

4. Show a read-only "Question Configuration" section.
   For every configured topic show:
   - Topic name
   - Available question count
   - Pool type: Entire Topic or Manually Selected
   - Selected pool count
   - Questions per participant
   - Selection mode
   Add an "Edit" action that returns to Step 2.

5. Show quiz summary:
   - Total topics
   - Total questions per participant
   - Time per question: 20 seconds
   - Estimated quiz duration
   - Standard questions count
   - Double-point questions count

6. Show marking explanation:
   Standard = 600 base points + time bonus
   Double Points = 1200 base points + time bonus
   Do not display the exact time-bonus formula.

7. Show a clear notice:
   "Once created, the quiz configuration will be saved and ready to host."

8. Buttons:
   - Back
   - Create Quiz

9. Back returns to Step 2 while preserving state.

10. Create Quiz must call the existing API through src/api.js.
    Do not call axios directly from the component.

11. Disable Create Quiz while submitting and prevent duplicate submissions.

12. On successful creation:
    show a success state/message and provide a button to return to Quiz Management.

13. On API failure:
    show a clean error message and keep the entered configuration intact.

14. Validate required configuration before creating.
    Do not create the quiz if validation fails.

15. Use the existing ISHack-style light UI and existing layout/components.
    Do not add custom questions, AI, leaderboard settings, or other features.
