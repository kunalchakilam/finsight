Create an AuthContext for my React + Vite FinSight app.

Requirements:
- Create src/context/AuthContext.jsx.
- Store the authenticated user and JWT token in state.
- On initial load, read "token" and "user" from localStorage.
- Expose:
  login(authResponse)
  logout()
  user
  token
  isAuthenticated
- login() should save token and user to localStorage and update state.
- logout() should remove both from localStorage, clear state, and navigate to /login.
- Preserve the existing Login/Register pages and ProtectedRoute.
- Do not add any libraries.
- Use React Context API, useState and useEffect.
- Export AuthProvider and useAuth.
- Wrap the existing application with AuthProvider without changing unrelated functionality.
- Do not modify FinanceContext or the existing API modules yet.
- Return the complete AuthContext.jsx and required App.jsx changes.
