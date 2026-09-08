Update the public quiz entry flow to use SSO only.
When "Join Quiz" is clicked, open the quiz in a NEW browser tab.
Create a separate immersive QuizEntry layout without the management sidebar/footer.
Do not ask the participant to enter their name.
For development, provide a simple "Continue with SSO" action using the existing dummy SSO users.
After SSO resolves the user identity, call the quiz start API.
Display the resolved participant name as confirmation before starting.
On success, transition directly into the Quiz screen.
Keep this structured so Okta SSO can replace the development SSO later.
