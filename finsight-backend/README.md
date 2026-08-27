Create a high-end, modern internal corporate gamified quiz platform frontend for Synchrony employees.

The product should feel inspired by Kahoot's energy and gamification, but it must NOT look like a copy of Kahoot. Create a unique, premium "corporate gaming" aesthetic that feels futuristic, energetic, polished, and suitable for an enterprise environment.

PROJECT NAME:
"Synchrony Quiz Arena"

CORE CONCEPT:
An internal monthly quiz platform where employees compete in live quizzes, answer questions within 20 seconds, earn points based on correctness and speed, and compete on a live leaderboard.

For this first prototype, focus primarily on the ADMIN PORTAL, but design the visual language so it can naturally extend to the employee quiz-taking interface.

==================================================
GLOBAL VISUAL DESIGN
==================================================

Primary background:
- Charcoal gray: #323232
- Use a subtle dark charcoal gradient rather than a flat background.
- Add very subtle transparency/glass effects in panels.
- Avoid pure black backgrounds.
- Background should feel dimensional but not visually noisy.

Primary text:
- Neon/off-white
- High contrast against charcoal.

Primary accent:
- Amber / electric yellow: #FFB700
- Use this for important actions, highlights, active states, rankings, scores, progress indicators and key metrics.

Secondary visual treatment:
- Soft glassmorphism
- Subtle borders
- Very subtle glow around important interactive elements
- Rounded cards, but avoid excessive "bubble" styling
- Clean geometric layouts
- Premium enterprise SaaS aesthetic combined with gaming energy

Typography:
- Modern geometric sans-serif
- Bold, highly readable headings
- Clean medium-weight body text
- Large numerical typography for scores, participants and rankings

Do NOT use:
- Generic blue SaaS dashboard styling
- Excessive gradients
- Excessive neon glow
- Cartoonish gaming UI
- Excessive glass blur
- Cluttered dashboards
- Excessive emojis
- Stock illustrations

==================================================
OPTION COLORS
==================================================

The four quiz answer options should each have a distinct pastel-neon color.

Use these four colors:

A — Pastel Neon Mint: #7FFFD4
B — Pastel Neon Coral: #FF8F9C
C — Pastel Neon Lavender: #B9A7FF
D — Pastel Neon Cyan: #7DDFFF

These should feel:
- Bright
- Playful
- Innovative
- Modern
- Easy to distinguish
- Compatible with the charcoal + amber brand palette

Use the colors primarily for answer cards, option indicators, small accents and interaction states.

Do not make the entire interface these colors.

==================================================
ADMIN PORTAL
==================================================

Create a complete responsive admin dashboard.

LEFT SIDEBAR:

Logo:
"Synchrony Quiz Arena"

Navigation:
- Dashboard
- Quizzes
- Create Quiz
- Participants
- Leaderboards
- Results
- Settings

Bottom of sidebar:
- Admin profile
- Admin name
- Role: Administrator
- Logout

SIDEBAR STYLE:
- Charcoal translucent panel
- Minimal icons
- Amber highlight for active navigation
- Smooth hover states
- Collapsible sidebar

==================================================
ADMIN DASHBOARD
==================================================

Header:

"Good afternoon, Admin"

Subtitle:
"Manage quizzes, participants and engagement."

Top-right:
- Search
- Notifications
- Admin avatar

KEY METRIC CARDS:

1. Active Quizzes
2. Total Participants
3. Completed Quizzes
4. Average Participation

Each card should contain:
- Large numerical value
- Small descriptive label
- Small trend indicator
- Minimal icon

Use amber only for important highlights.

==================================================
CURRENT MONTHLY QUIZ
==================================================

Create a prominent hero card for the current monthly quiz.

Example:

AUGUST MONTHLY CHALLENGE

"Knowledge. Speed. Competition."

15 Questions
20 Seconds / Question
500+ Expected Participants

Status:
"Scheduled"

Actions:
[Manage Quiz]
[View Participants]

Include a subtle visual countdown:
"Starts in 02 : 14 : 36"

Make this card visually stronger than the other dashboard cards.

==================================================
UPCOMING / RECENT QUIZZES
==================================================

Create a clean table/card hybrid.

Columns:

Quiz
Type
Questions
Participants
Status
Date
Actions

Example entries:

August Monthly Challenge
Public
15
526
Scheduled

Engineering Team Challenge
Private
10
84
Draft

July Knowledge Challenge
Public
20
491
Completed

Use small status badges:
- Draft
- Scheduled
- Live
- Completed

==================================================
QUIZ BUILDER
==================================================

Create a polished quiz creation interface.

Header:

"Create New Quiz"

Fields:

Quiz Name
Description
Quiz Type:
- Public
- Private / Team

Scheduled Date
Start Time

Questions:

Question 1

Question text field

Four answer cards:

A
[Option text]

B
[Option text]

C
[Option text]

D
[Option text]

Allow the admin to select:
"Correct Answer"

Question configuration:

Time:
20 seconds (fixed)

Points:
Normal — 600 base points
Important — 1200 base points

Toggle:
"Important Question / Double Points"

Display an informational note:

"Correct answers receive base points plus a dynamic speed bonus of up to 400 points."

Buttons:

[Save Draft]
[Preview]
[Publish Quiz]

==================================================
QUESTION MANAGEMENT
==================================================

Create a question list on the right or below the builder:

Question 1
Question 2
Question 3
Question 4
...

Allow:
- Add question
- Duplicate question
- Delete question
- Reorder questions

Show a small indicator for:
- Normal question
- Double-point question

==================================================
QUIZ PREVIEW
==================================================

Create a preview mode showing how employees will experience the quiz.

Screen:

"Get Ready!"

Question 3 / 15

Timer:
20

Question:
"What is the primary purpose of..."

Four large answer cards:

A — Mint
B — Coral
C — Lavender
D — Cyan

Make the answer cards large, highly clickable and visually exciting.

Include a small score indicator:

Base: 600
Speed Bonus: Up to 400

For an important question:

"DOUBLE POINTS"
Base: 1200
Speed Bonus: Up to 400

==================================================
EMPLOYEE ENTRY / PARTICIPATION
==================================================

Before entering a quiz, employees should see a small identity form.

Title:

"Ready to Play?"

Fields:

Full Name
SSO ID

Button:

[Continue]

Below the form:

"Your SSO ID is used only to identify your quiz participation."

After submitting the form, show:

"Choose Your Avatar"

Provide a grid of original, company-safe character avatars.

Do NOT use copyrighted Marvel/DC/Disney/movie characters.

Instead create original character archetypes such as:

- Explorer
- Astronaut
- Ninja
- Robot
- Detective
- Scientist
- Gamer
- Superhero-inspired original character
- Hacker
- Strategist
- Inventor
- Futuristic AI character

Each avatar should have a unique visual identity.

==================================================
LEADERBOARD
==================================================

Design a visually exciting leaderboard.

Top three positions should be visually prominent:

1st
2nd
3rd

Show:

Avatar
Employee Name
Score
Rank

Example:

🥇 Alex
1,540

🥈 Priya
1,490

🥉 Rahul
1,450

Then normal ranking:

4  Kunal     1,420
5  Sarah     1,390
6  Daniel    1,360

Highlight the current employee with an amber border.

Include:

"Your Rank: #37"
"Top 10%"

The leaderboard should feel dynamic and competitive.

==================================================
SCORING VISUALIZATION
==================================================

Clearly communicate the scoring model.

Normal Question:

600 Base
+
Up to 400 Speed Bonus
=
Maximum 1000

Important Question:

1200 Base
+
Up to 400 Speed Bonus
=
Maximum 1600

Speed bonus should visually communicate that it decreases based on response time and participant response position.

Do NOT expose a complicated mathematical formula in the UI.

Instead show intuitive messaging such as:

"Fast answers earn more bonus points."

==================================================
INTERACTIONS & ANIMATIONS
==================================================

Use subtle, premium animations.

Examples:

- Cards gently lift on hover
- Amber glow on active buttons
- Smooth sidebar transitions
- Progress bar animation
- Countdown animation
- Score count-up animation
- Leaderboard position movement
- Rank change animation
- Correct-answer celebration
- Double-point question visual emphasis

Keep animations fast and professional.

Avoid excessive bouncing or cartoon effects.

==================================================
RESPONSIVE DESIGN
==================================================

Desktop-first admin dashboard.

Also support:
- Tablet
- Mobile employee quiz interface

The employee quiz interface should prioritize:
- Large question
- Large answer buttons
- Visible 20-second timer
- Current question number
- Score
- Minimal distractions

==================================================
DESIGN PRINCIPLE
==================================================

The final result should feel like:

"An enterprise product designed by a premium gaming UX team."

It should combine:

Corporate credibility
+
Gamification
+
Competition
+
Innovation
+
Clean modern UI

The most important visual hierarchy should be:

QUIZ → QUESTION → ANSWER → SCORE → LEADERBOARD

For the admin portal:

QUIZZES → PARTICIPANTS → RESULTS → ENGAGEMENT

Create realistic sample data throughout the prototype so the dashboard looks alive rather than empty.

Build the frontend with reusable components and a clean component architecture so the backend APIs can later be integrated without redesigning the UI.
