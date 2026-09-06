Configure CORS for the ISQuest Spring Boot backend so the React frontend can call the API.

1. Use the existing:
com.syf.isquest.api.config

2. Create:
CorsConfig.java

3. Configure a global CORS policy for the application.

4. For local development, allow the React frontend origins:
- http://localhost:5173

5. Allow these HTTP methods:
- GET
- POST
- PUT
- DELETE
- PATCH
- OPTIONS

6. Allow request headers:
- Content-Type
- Authorization
- Accept

7. Allow credentials if required by the existing authentication setup.

8. Apply the CORS configuration globally to all API endpoints:
"/**"

9. Do not add @CrossOrigin annotations to individual controllers.

10. Do not modify the existing Security, AWS, Vault, database, or other configuration unless required for CORS to work.

11. If Spring Security is configured, make sure CORS is enabled in the SecurityFilterChain so the global CORS configuration is actually respected.

12. Do not disable CSRF or security just to make CORS work.

13. Verify that:
GET /api/quizzes
can be called from the React frontend without a browser CORS error.

14. Keep the configuration clean and ready to later replace the local origins with the deployed ISQuest frontend URL.
