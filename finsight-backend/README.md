Update ONLY src/api/apiClient.js to support JWT authentication.

- Read the JWT from localStorage using the key "token".
- Automatically add:
  Authorization: Bearer <token>
  to every API request when a token exists.
- Do not add the Authorization header when there is no token.
- Keep the existing API_BASE_URL and error handling.
- Do not add Axios or any new library.
- If the backend returns 401 Unauthorized, remove the expired/invalid token and user from localStorage and redirect to /login.
- Keep DELETE 204 handling unchanged.
- Do not modify any other files.
- Return the complete updated apiClient.js.
