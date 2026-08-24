Update ONLY the React/Vite frontend to complete authentication and user-specific data integration with my existing Spring Boot backend.

Backend:
- Base URL: http://localhost:8080/api
- POST /auth/register
- POST /auth/login
- GET/POST/PUT/DELETE /accounts
- GET/POST/PUT/DELETE /categories
- GET/POST/PUT/DELETE /transactions
- All financial APIs require: Authorization: Bearer <JWT>

Frontend requirements:
1. Complete LoginPage.jsx and RegisterPage.jsx using the existing authApi.js.
2. Create/use AuthContext with:
   - user
   - token
   - isAuthenticated
   - login()
   - logout()
3. Store JWT as "token" and user as "user" in localStorage.
4. Protect Dashboard and all authenticated routes with ProtectedRoute; redirect unauthenticated users to /login.
5. Update apiClient.js to automatically attach the JWT Authorization header to every API request.
6. On 401, clear authentication data and redirect to /login.
7. Keep the existing UI/design, routing structure, FinanceContext, and components wherever possible.
8. FinanceContext should continue managing Accounts, Categories and Transactions, but all data must now come from the authenticated user's backend APIs.
9. Do NOT implement any authentication/business logic in React that already exists in Spring Boot.
10. Add a logout action to the existing application/header/sidebar without redesigning the UI.
11. Do not add Axios or any new dependency.
12. Do not modify unrelated functionality.

After making changes, ensure this complete flow works:
Register → JWT → localStorage → Dashboard
Login → JWT → authenticated APIs → user's Accounts/Categories/Transactions
Logout → clear token/user → /login
Refresh → authentication persists
Different user → sees only their own financial data.

Inspect the existing project structure and preserve existing code patterns. Return only the files that actually need modification.
