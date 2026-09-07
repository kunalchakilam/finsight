Build the first step of the ISQuest Create Quiz flow.

Use the existing feature structure:
src/features/quizManagement/

Keep the existing QuizDashboard/QuizManagement structure and styling conventions.

1. Create:
- CreateQuiz.jsx
- QuizBasicDetails.jsx

Keep them directly inside:
src/features/quizManagement/

2. The existing "Create Quiz" button in Quiz Management should navigate to/open Create Quiz.

3. Create Quiz should use a clean multi-step layout.
For now implement ONLY Step 1.

Step indicator:
1. Basic Details
2. Questions
3. Review

4. Step 1 title:
"Create Quiz"

Description:
"Set up the basic details for your quiz."

5. Form fields:

Quiz Name
- Required
- Placeholder: "Enter quiz name"

Description
- Optional
- Multiline textarea
- Placeholder: "Enter a short description"

Visibility
- Required
- Public
- Private

6. Explain visibility briefly:
Public:
"Anyone can join this quiz."

Private:
"Only participants with the quiz key or QR code can join."

7. Buttons:
- Cancel
- Next

8. Validate Quiz Name before allowing Next.
Show a clear inline validation message.

9. When Next is clicked:
- Store the form values in CreateQuiz state.
- Navigate to Step 2.
- Do NOT call the backend yet.

10. Add a Back/Cancel action that returns to Quiz Management.

11. Keep the styling consistent with the existing ISHack/Quiz Management portal:
- white/light background
- amber primary actions
- dark charcoal text
- subtle borders
- clean spacing
- no gamified/dark styling

12. Do not create mock quiz data.

13. Do not implement custom question creation yet.

14. Do not implement Question Bank configuration yet.
Step 2 can initially be a placeholder that will be implemented next.

15. Do not modify existing Quiz Management functionality.

16. Reuse existing shared layout components.

17. Verify routing/imports and ensure the frontend builds successfully.
