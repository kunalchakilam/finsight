Create LoginPage.jsx and RegisterPage.jsx for my React + Vite FinSight application.

Requirements:
- Use functional components and React hooks.
- Keep the UI clean, modern and responsive using my existing styling/theme.
- Do NOT add any new libraries.
- Use fetch through my existing apiClient.js.
- Show loading states and error messages.
- Redirect to Dashboard after successful login.
- Store JWT token in localStorage as "token".
- Store user details in localStorage as "user".

Backend APIs:

POST /api/auth/register

Request:
{
  "name": "Kunal",
  "email": "kunal@test.com",
  "password": "Password123"
}

Response:
{
  "token": "...",
  "userId": 1,
  "name": "Kunal",
  "email": "kunal@test.com",
  "role": "USER"
}

POST /api/auth/login

Request:
{
  "email": "kunal@test.com",
  "password": "Password123"
}

Response:
{
  "token": "...",
  "userId": 1,
  "name": "Kunal",
  "email": "kunal@test.com",
  "role": "USER"
}

Login Page:
- Email
- Password
- Login button
- Link to Register page

Register Page:
- Name
- Email
- Password
- Confirm Password
- Register button
- Link to Login page
- Validate password and confirm password before API call

After successful login/register:
- Save token and user to localStorage
- Navigate to Dashboard

Create:
1. LoginPage.jsx
2. RegisterPage.jsx
3. authApi.js with login() and register() functions
4. Any required route additions

Do not modify unrelated components.
