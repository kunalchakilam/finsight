Implement a temporary ISQuest login page for development.
Create a Login component following the existing ISQuest/ISHack light corporate styling.
Show Synchrony logo, ISQuest, Email ID field, and a primary "Sign in with SSO" button.
No password and no registration.
Call POST /api/auth/dev-login through the existing src/api.js.
Store the returned user (name, email, role) in session/local storage.
After login, route users to the appropriate existing portal based on role.
Reuse existing Header, Sidebar and layout components; do not redesign them.
Add logout support by clearing the stored user and returning to Login.
