Refactor the Spin the Wheel presentation into a dedicated component/page instead of building the wheel directly inside QuizEntry.

1. Keep QuizEntry responsible only for deciding the presentation mode and starting the quiz.
2. When presentationMode is SPIN_WHEEL, render a dedicated SpinWheelQuiz component/page.
3. Do not mix Spin Wheel rendering logic with the existing Standard Quiz UI.
4. Create a dedicated wheel component inside the existing quiz feature structure, using the project's current folder conventions.
5. The SpinWheelQuiz layout must be a full-screen landscape desktop/laptop experience with a strict 50/50 split.
6. LEFT 50%: a large circular wheel centered both horizontally and vertically.
7. RIGHT 50%: the question/options area, using the existing immersive quiz styling.
8. Recreate the wheel structure from the provided reference: large perfect circle, equal radial segments, thin white/light-gray dividers, circular center button, and fixed triangular pointer on the RIGHT edge.
9. Use ONE solid charcoal-gray color for every segment. No rainbow colors, gradients or individually colored segments.
10. Use neon amber #FFB700 ONLY for wheel text, SPIN button emphasis and selected-segment highlight.
11. Wheel labels must contain ONLY the topic name. Never show Q1, Q2, question numbers or full question text.
12. Create exactly one wheel segment for every remaining question returned by the backend.
13. Every segment must have equal angular size: 360 / remainingQuestionCount degrees.
14. Arrange topic text along the segment radius/arc like the reference image, keeping text centered inside its segment.
15. Dynamically recalculate the wheel whenever a question is removed; never hardcode 4, 6 or 8 segments.
16. Keep the backend-selected question authoritative. Frontend must only animate the wheel to the backend-selected segment.
17. Keep the existing 3-second spin animation and pointer position.
18. After a question is completed, remove that question from the wheel before the next spin.
19. Do not modify answer validation, timer, scoring, feedback or final-result logic.
20. Make the wheel implementation isolated and reusable so future UI changes do not affect QuizEntry.
