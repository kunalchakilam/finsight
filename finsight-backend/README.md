Build the initial frontend shell for the "ISQuest" project using the existing ISHack layout code already copied into this project.

1. BEFORE making changes, inspect:
   - src/components/layout
   - tailwind.config.js
   - App.js
   - any layout-related CSS/components imported by them.
   Treat the existing ISHack implementation as the reference for structure, spacing and reusable patterns.

2. Do NOT recreate the layout from scratch and do NOT replace the existing layout architecture. Adapt the copied ISHack components for ISQuest.

3. Create the initial ISQuest shell with:
   - Left sidebar/navigation
   - Top header
   - Main content area
   - Footer

4. Replace ISHack branding/text with ISQuest where appropriate.

5. Sidebar should initially contain:
   - ISQuest
   - Dashboard
   - Quiz Management
   - Topics
   - Leaderboards
   - Settings
   Keep these as navigation placeholders for now.

6. Keep the existing ISHack footer structure and styling. The Innovation Station logo at the bottom-right MUST remain present and visually consistent with ISHack.

7. Adapt the theme to ISQuest:
   - Charcoal #323232 as the primary background
   - Subtle charcoal gradient/transparency
   - Neon/off-white text
   - Amber #FFB700 for active states and important accents
   - Clean cards, subtle borders and shadows.

8. Preserve the existing Tailwind configuration where possible. Only add/modify theme values that are genuinely required for ISQuest. Do not unnecessarily rewrite tailwind.config.js.

9. Update App.js only as needed to render the new ISQuest layout and a simple Dashboard placeholder.

10. Keep the code modular and continue using src/components/layout for shared layout components.

11. DO NOT implement authentication, roles, APIs, quiz functionality, charts, question management or the gamified quiz UI yet.

12. Do not install unnecessary dependencies or change the project configuration unnecessarily.

13. Ensure the project builds/runs successfully after the changes and do not break existing reusable components.

14. The goal of this task is ONLY to establish a clean, working ISQuest base layout that we can build on in the next tasks.
