Add development role-based access to the existing ISQuest frontend.
Read the logged-in user role from the existing session/local storage.
SUPER_ADMIN: Quiz Management, Admin Management, Topics & Question Bank, Leaderboards.
ADMIN: My Quizzes, Join a Quiz, Topics, Leaderboards.
USER: Join a Quiz, Leaderboards.
Protect portal routes so unauthenticated users are redirected to Login.
Do not duplicate pages or layouts.
Hide navigation items that the current role cannot access.
Keep the existing Header, Sidebar and Footer behavior unchanged.
