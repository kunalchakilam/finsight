Build the Topics & Question Bank frontend feature using the existing feature structure and styling conventions.

Create the feature under:
src/features/topicsQuestionBank/

Use this structure:
- TopicsDashboard.jsx
- TopicsQuestionBank.jsx
- TopicCard.jsx
- TopicQuestions.jsx
- QuestionCard.jsx

1. TopicsDashboard.jsx should be the main page/container for the Topics & Question Bank feature, similar to the existing QuizDashboard structure.

2. TopicsQuestionBank.jsx should contain the main Topics & Question Bank content.

3. Match the existing Quiz Management / ISHack visual style exactly:
- Clean white/light background
- Same typography
- Same spacing
- Same cards
- Same amber primary buttons
- Reuse existing shared layout components
- Do not introduce the dark/gamified quiz UI.

4. Page header:
- Title: "Topics & Question Bank"
- Short description explaining that topics and questions can be managed here.
- Right side: amber "Upload Questions" button.

5. Below the header add a search bar:
- Placeholder: "Search topics..."
- Filter topics by topic name and description.

6. Display topics in a responsive card grid.

Each TopicCard should contain:
- Topic icon
- Topic name
- Description
- Number of questions
- "Manage →" button

7. Use the existing API file:
src/api.js

Use:
api.topics.getAll()
for loading topics.

Do NOT create another API/service file.

8. Do not use mock topic/question data.

9. Add loading and error states consistent with Quiz Management.

10. When "Manage →" is clicked:
- Show the questions belonging to that topic.
- Use api.topics.getQuestions(topicId).
- Keep the user within the Topics & Question Bank feature.
- Provide a clear "Back to Topics" action.

11. TopicQuestions.jsx should display:
- Selected topic name
- Topic description
- Search questions bar
- Questions belonging to that topic

12. QuestionCard.jsx should display:
- Question text
- Four options
- Correct answer
- Contributed by
- Edit button
- Delete button

13. Edit and Delete are UI placeholders for now.
Do not implement PUT/DELETE APIs yet.

14. "Upload Questions" is also a UI placeholder for now.
Do not implement Excel upload yet.

15. Update routing so TopicsDashboard is opened when the existing "Topics & Question Bank" sidebar navigation item is selected.

16. Preserve all existing Quiz Management functionality and UI.

17. Do not create pages/, services/, hooks/, or additional nested component folders.

18. Verify imports and ensure the application builds successfully.
