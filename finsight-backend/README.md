Update the current ISQuest shared shell based on the ISHack reference screenshots. This task is ONLY for navigation/header behavior and branding. Do not build feature pages yet.

1. REMOVE "Dashboard" completely from the navigation. Do not create or retain a Dashboard page.

2. Super Admin navigation should be:
   - Quiz Management
   - Admin Management
   - Topics & Question Bank
   - Leaderboards

3. Admin/User navigation can be prepared for role-based rendering later, but do not implement role logic yet.

4. HEADER MUST be redesigned as follows:
   - Top-left: Synchrony logo followed by "ISQuest".
   - Top-right: Refresh control with refresh icon + "Refresh", followed by profile icon.
   - Keep the header clean and visually consistent with the ISHack portal.
   - Use the existing Synchrony logo asset if available; do not create a replacement.

5. SIDEBAR:
   - Expanded by default.
   - Do NOT use the current separate arrow/chevron toggle.
   - Clicking the top-left Synchrony logo + ISQuest brand area should collapse/expand the sidebar.
   - When collapsed, show only navigation icons.
   - When expanded, show icons + labels.
   - Main content must automatically use the available space when collapsed.

6. Keep the sidebar narrow and visually similar to ISHack, with amber/yellow #FFB700 active navigation styling.

7. PROFILE:
   - Clicking the top-right profile icon opens a small dropdown menu.
   - Menu options:
     1. View My Profile
     2. Logout
   - Use a clean white dropdown with subtle shadow/border.
   - Close the dropdown when clicking outside.

8. REFRESH:
   - Refresh icon + "Refresh" should be clickable.
   - For now, trigger a simple page/data refresh behavior without implementing APIs.

9. Keep the ISHack-style clean light background, typography, spacing, footer and Innovation Station logo at bottom-right.

10. Do NOT use the dark/gamified #323232 theme for the management portal.

11. Do not install dependencies or rewrite the existing layout architecture. Reuse the copied code in src/components/layout.

12. Update the browser title to "ISQuest" and use the existing Synchrony logo as the favicon if available.

13. Do not implement Quiz Management, Admin Management, Topics, Leaderboards or any backend functionality yet.

14. Ensure the application builds successfully after these changes.
