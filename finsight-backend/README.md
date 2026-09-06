Update the existing Spring Security configuration so the Question Bank development endpoints can be tested locally without authentication.

1. Find and use the existing SecurityFilterChain configuration.
Do not create a second SecurityFilterChain.

2. For local development, permit these endpoints without authentication:

GET  /api/topics
GET  /api/topics/**
GET  /api/questions/**
POST /api/questions/import/preview

3. Keep all other existing security rules unchanged.

4. Do NOT disable Spring Security globally.

5. Do NOT remove CSRF/security configuration globally.

6. Do NOT modify the existing authentication mechanism.

7. Do NOT add @CrossOrigin or duplicate security configuration.

8. Keep the configuration easy to tighten later when real authentication/authorization is implemented.

9. Verify that:
POST /api/questions/import/preview
can now be called from Postman without an Authorization header.

10. Verify that existing Quiz Management APIs continue working exactly as before.
