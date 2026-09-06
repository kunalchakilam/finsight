Fix the current ISQuest main portal shell to closely match the ISHack reference screenshots I attached. Do NOT build any new dashboard functionality yet.

1. Compare the current ISQuest UI against the ISHack screenshot carefully. The ISHack screenshot is the visual and interaction reference.

2. Fix the LEFT NAVIGATION first:
   - It should be a narrow vertical sidebar similar to ISHack.
   - When expanded, show the navigation labels.
   - When collapsed, it should shrink to an icon-only narrow rail.
   - Add a small chevron/toggle control on the sidebar edge to collapse/expand it.
   - The main content area must automatically expand when the sidebar collapses.
   - Preserve the active navigation state using the ISHack-style amber/yellow highlight.

3. Use appropriate icons for:
   - Dashboard
   - Quiz Management
   - Topics
   - Leaderboards
   - Settings
   Keep icons simple and consistent with the ISHack UI.

4. The ISQuest logo/branding in the sidebar should follow the same positioning and scale as the ISHack branding. Do not create an oversized text-based logo.

5. HEADER:
   - Match the ISHack header proportions and spacing.
   - Keep the page title on the left of the content area.
   - Keep Refresh and user/profile controls on the right.
   - Do not make the header dark or gamified.

6. MAIN PORTAL THEME:
   - Clean white/light background like ISHack.
   - Dark charcoal text.
   - Amber/yellow #FFB700 for active states and important accents.
   - Very subtle gray borders/dividers.
   - No dark charcoal gaming background.

7. FOOTER:
   - Keep the existing ISHack footer implementation/style.
   - Innovation Station logo MUST remain at the bottom-right.
   - Keep the footer positioning and spacing consistent with ISHack.

8. BRANDING:
   - Change the browser document title from "isquest-ui" to "ISQuest".
   - Update the favicon/browser-tab icon to the Synchrony logo.
   - Inspect existing public/assets for a Synchrony logo before creating anything new.
   - Use the existing Synchrony logo asset if available.

9. Do not change the existing project architecture or install dependencies.
10. Do not modify quiz pages, APIs, authentication, or other future functionality.
11. Only fix the shared layout, sidebar behavior, header, footer and browser branding.
12. Ensure the final result visually resembles an ISQuest-branded sibling of ISHack, including the same clean proportions and sidebar collapse behavior.
13. Run/build the application after changes and fix any errors introduced by this task.
