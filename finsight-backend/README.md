Add authentication-based route protection to my React + Vite FinSight app.

Create a reusable ProtectedRoute component that checks whether a JWT exists in localStorage under "token".

If no token exists:
- Redirect the user to /login using React Router.

If a token exists:
- Render the requested page normally.

Update the existing routing structure so Dashboard and all authenticated application pages are wrapped with ProtectedRoute.

Keep Login and Register routes public.

Do not change the existing UI, pages, API layer, or authentication logic.
Do not add any new libraries.
Use the existing react-router-dom setup.
