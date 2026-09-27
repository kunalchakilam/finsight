Redesign the complete /is-echkc Experience Center frontend as a fun, polished entry experience while reusing the existing quiz APIs and quiz engine.

1. Before the quiz starts, use a charcoal-gray + Synchrony amber-yellow gradient background (#323232 → #171717 with subtle #FFB700 glow).
2. Reuse the same overall visual language as the normal ISQuest quiz, but make the Experience Center entry screens more welcoming and playful.
3. Create a dedicated top header: ISQuest/Synchrony logo on the left and Innovation Station logo on the right, with comfortable edge spacing.
4. Main screen: show "Live Quizzes" and available EXPERIENCE_CENTER quiz cards with quiz name, description and useful details.
5. Each quiz card has two actions: primary "Let's Play!" and secondary "See Who's Leading".
6. If no quizzes are available, show a fun empty state such as "The Quiz Station Is Warming Up!" with "Stay tuned — the next challenge is coming soon." instead of a generic no-quizzes message.
7. Clicking "Let's Play!" opens the registration screen with SSO and Name fields and a primary "I'm In!" button.
8. Add a secondary "How to Play" / instructions action on the registration screen if appropriate, while keeping registration as the main action.
9. After successful registration, show a centered Instructions card containing quiz name, question count, time per question, scoring summary and presentation mode.
10. Use a fun primary instruction button such as "Let's Go! 🚀" instead of "Start Quiz".
11. Until "Let's Go!" is clicked, keep the charcoal/amber Experience Center styling.
12. After "Let's Go!", transition into the existing immersive quiz UI exactly as used by the normal quizzes; do not create another quiz UI.
13. "See Who's Leading" opens the Experience Center leaderboard without requiring registration.
14. Leaderboard: show the top 3 participants prominently first, using 1st/2nd/3rd podium positions with gold, silver and bronze medal indicators beside their names and scores.
15. Below the podium, show the remaining ranked participants up to the top 20 with rank, name and score.
16. Reuse existing Experience Center APIs/session logic; do not modify backend functionality or create duplicate quiz components.
17. Keep all existing Standard Quiz, Spin Wheel, scoring, timer, result and session-resume behavior unchanged.
