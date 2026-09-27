Completely redesign the existing /is-eckhc Experience Center UI. Do not change any backend APIs or quiz functionality.

1. Overall theme: charcoal gray background with subtle charcoal-to-dark-gray gradient and restrained #FFB700 amber accents, matching the immersive quiz UI.
2. Every Experience Center screen must fit entirely within the browser viewport with NO page scrolling.
3. Create a dedicated full-width header spanning the entire screen.
4. Header background must be white with approximately 60–75% transparency so the charcoal background is subtly visible through it.
5. Header left: Synchrony logo + "ISQuest". Header right: Innovation Station logo.
6. Do not show Sidebar, Profile, Refresh button or normal portal navigation.
7. Landing screen: directly show the available live Experience Center quiz cards. Do NOT add a "Live Quizzes" heading, section heading or unnecessary descriptive text.
8. If no live quizzes exist, show only a centered message such as "Please wait till the announcement of the next quiz." with no quiz heading/card.
9. Each quiz card must show: Quiz Name, Description, Start Date & Time, End Date & Time, Number of Questions, prominent REGISTER/PARTICIPATE button, and small secondary VIEW LEADERBOARD button.
10. Registration screen: same background/header; show one centered registration card containing quiz name, SSO and Name fields, and a prominent VIEW INSTRUCTIONS button.
11. Instructions screen: same background/header; show one centered instructions card containing the quiz instructions and a prominent START QUIZ button.
12. Keep cards polished and spacious but compact enough to fit the viewport; do not introduce vertical scrolling.
13. From START QUIZ onward, use the existing immersive quiz UI exactly as it currently works; do not redesign it.
14. Reuse existing API calls, session handling and components wherever possible; this task is UI/layout only.
15. Make the layout responsive for laptop, desktop and iPad-sized screens while always fitting within the viewport.
