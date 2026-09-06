Build the initial frontend shell/layout for a new project called "ISQuest", following the existing ISHack project's structure and coding conventions.

1. First inspect the existing project structure, especially src/core, src/shared, src/features and existing reusable header/footer/navbar components. Reuse existing components/patterns where appropriate; do not duplicate them unnecessarily.

2. Create a clean ISQuest application layout with:
   - Left navigation/sidebar
   - Top header
   - Main content area
   - Footer

3. Keep the layout role-ready for three roles: Super Admin, Admin and User, but DO NOT build role-specific pages yet.

4. Sidebar should initially show:
   - ISQuest branding
   - Dashboard
   - Quiz Management
   - Topics
   - Leaderboards
   - Settings
   Keep navigation items as placeholders for now.

5. Header should be minimal and clean, with page title area, refresh/action area if useful, and user/profile icon. Follow the visual spacing and simplicity of the provided ISHack reference.

6. Use the ISQuest theme:
   - Background: charcoal #323232 with a subtle gradient/transparency
   - Primary text: neon/off-white
   - Accent: amber #FFB700
   - Clean white/charcoal surfaces with subtle borders and shadows.

7. IMPORTANT: Reuse the existing ISHack footer implementation/style if available. The footer must remain visually consistent with ISHack, including the Innovation Station logo positioned at the bottom-right corner.

8. Make the layout responsive, but prioritize desktop/tablet for the management portal.

9. Keep components modular and place them in a structure similar to the existing ISHack project, e.g. shared/components, core/layout and features where appropriate.

10. For now, render only a simple placeholder Dashboard inside the main content area. Do not implement quiz functionality, APIs, authentication, charts or game UI.

11. Do not install unnecessary dependencies or rewrite existing configuration files.

12. After implementation, ensure the application builds/runs successfully and existing functionality is not broken.
