Update the ISQuest temporary login page to use SSO only.
Remove the email field and any password or registration UI.
Show a single "SSO" input accepting exactly 9 digits.
Add a primary "Sign in with SSO" button.
Call POST /api/auth/dev-login through the existing src/api.js.
Validate that SSO contains exactly 9 digits before submitting.
On success, store the returned user identity and role as before.
Redirect to the existing role-specific landing page.
Keep the existing Synchrony/ISQuest light corporate styling.
