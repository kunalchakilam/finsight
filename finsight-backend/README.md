Build the first real ISQuest feature: Super Admin → Quiz Management.

Follow the existing ISQuest shell and ISHack-inspired visual style. Do not modify the global header, sidebar or footer.

1. Create a dedicated feature folder:
   src/features/quizManagement/
   Keep all Quiz Management-specific components, mock data and page logic inside this folder.
   Follow the existing ISHack project feature-folder conventions where applicable.

2. Create modular files/components rather than putting everything in one file. Keep the structure clean and easy to connect to backend APIs later.

3. Page header:
   - Title: "Quiz Management"
   - Description: "Create, manage and monitor Innovation Station quizzes."
   - Primary amber #FFB700 "Create Quiz" button on the right with plus icon.

4. Add ONLY 3 compact statistics:
   - Quizzes Hosted
   - Live Quizzes
   - Total Participants
   Use minimal stat blocks, NOT large dashboard cards.

5. Add a search bar below the statistics:
   - Placeholder: "Search quizzes..."
   - Search icon.
   - Filter quizzes by name/description.

6. Display individual quizzes as responsive cards in a grid. Do NOT make the entire page card-based.

7. Each quiz card contains:
   - Amber quiz icon inside a small square
   - Quiz name + status on top row
   - Short description
   - Public / Private indicator
   - Person icon + "Owner: [name]"
   - Participant icon + "[number] participants"
   - Charcoal "Manage →" button at bottom.

8. Status styling:
   - Active = green
   - Completed = red

9. Create exactly 2 dummy quizzes:
   - September Innovation Challenge — Active, Public, Innovation Station, 526 participants.
   - AML Awareness Challenge — Completed, Private, Priya Sharma, 84 participants.

10. Calculate statistics from the mock quiz data.

11. Keep mock data in a separate file inside quizManagement so it can later be replaced by an API service.

12. Create Quiz and Manage can be placeholder actions for now.

13. Keep the page clean, spacious and professional like ISHack. Amber is only for primary actions and quiz icons.

14. Do not install dependencies or modify unrelated components.

15. Do not build quiz creation, question bank, topics, leaderboard or backend yet.

16. Ensure the application builds successfully and the feature is accessible through Quiz Management navigation.
