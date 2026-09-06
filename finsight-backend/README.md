Update the current ISQuest frontend layout to closely match the existing ISHack portal shown in the attached reference screenshot.

IMPORTANT: The current ISQuest implementation is NOT what we want. It currently has a dark/charcoal gaming-style layout. Remove that approach for the main portal.

1. Treat the attached ISHack screenshot as the PRIMARY visual reference for the ISQuest management portal.

2. Inspect the copied ISHack implementation already present in:
   - src/components/layout
   - tailwind.config.js
   - App.js
   Reuse/adapt the existing ISHack layout patterns instead of creating a new layout from scratch.

3. ISQuest main portal should have the same overall structure as ISHack:
   - Clean white/light background
   - Narrow left navigation
   - Yellow/amber active navigation state
   - Clean header
   - Large content area
   - Minimal borders/dividers
   - Simple professional typography
   - Footer fixed/positioned consistently with ISHack

4. Sidebar should follow the ISHack style: compact, clean and minimal rather than a large dark sidebar.

5. Use ISQuest branding in place of ISHack, but preserve the same visual language and proportions.

6. Main navigation for now:
   - Dashboard
   - Quiz Management
   - Topics
   - Leaderboards
   - Settings

7. Keep the header similar to ISHack with:
   - Page title
   - Small supporting text where appropriate
   - Refresh/action area
   - User/profile icon on the right

8. Keep the ISHack footer structure and styling. The Innovation Station logo MUST remain at the bottom-right exactly as an important branding element.

9. Use the ISHack palette for the management portal:
   - White/light background
   - Dark charcoal text
   - Yellow/amber #FFB700 for active states and key accents
   - Subtle gray borders and muted secondary text

10. IMPORTANT: Do NOT use the charcoal #323232 gaming theme for this management portal. That theme will be used later only for the separate live quiz experience.

11. Keep the current React/Tailwind architecture and existing dependencies. Do not rewrite configuration unnecessarily.

12. For now, only create/fix the shared ISQuest shell and a simple Dashboard placeholder. Do not build quiz functionality or dashboard statistics yet.

13. Make sure the result visually feels like an ISHack sibling application, not a completely new product.

14. Do not modify unrelated components or functionality. Ensure the project still builds successfully.
