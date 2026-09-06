Build the first real ISQuest feature: Super Admin → Quiz Management.

Follow the existing ISQuest shell and ISHack-inspired visual style already implemented. Do not modify the global header, sidebar or footer.

1. Page header:
   - Title: "Quiz Management"
   - Short description: "Create, manage and monitor Innovation Station quizzes."
   - Add a primary amber #FFB700 "Create Quiz" button on the right.
   - Button should include a suitable plus icon.

2. Below the header, add a compact statistics section with ONLY 3 statistics:
   - Quizzes Hosted
   - Live Quizzes
   - Total Participants
   Use clean minimal stat blocks, NOT large dashboard cards.

3. Below the statistics, add a search bar:
   - Placeholder: "Search quizzes..."
   - Include a search icon.
   - It should filter the displayed quizzes by quiz name/description.

4. Below the search bar, display quizzes as individual cards in a responsive grid.
   Do NOT convert the entire page into cards.

5. Each quiz card must contain:
   - Amber/yellow quiz icon inside a small square
   - Quiz name
   - Status on the same top row
   - Short description
   - Public / Private indicator
   - Person icon + "Owner: [name]"
   - Person/participant icon + "12 participants"
   - "Manage →" button at the bottom
   - Manage button should use charcoal/dark gray styling.

6. Status styling:
   - Active = green text/dot
   - Completed = red text/dot

7. Create exactly TWO realistic dummy quizzes:
   - "September Innovation Challenge" — Active, Public, owner "Innovation Station", 526 participants.
   - "AML Awareness Challenge" — Completed, Private, owner "Priya Sharma", 84 participants.

8. Calculate the three statistics from the dummy quiz data rather than hardcoding unrelated values.

9. Keep the design clean, spacious and professional like ISHack. Use amber only for primary actions and quiz icons.

10. Add subtle hover interaction to quiz cards and buttons, but avoid excessive animations.

11. "Create Quiz" and "Manage" can be placeholder actions for now; do not implement quiz creation or backend APIs yet.

12. Keep quiz data in a clean local/mock data structure so it can be replaced with an API later.

13. Do not install dependencies or modify unrelated components.

14. Make the page responsive and ensure it builds successfully.

15. Only implement this Quiz Management page and its local search behavior. Do not build the quiz builder, question bank, topics, leaderboard or backend yet.
