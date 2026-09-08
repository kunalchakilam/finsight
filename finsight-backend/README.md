Implement a temporary development authentication flow for ISQuest.
Inspect the existing backend structure and reuse existing security/configuration.
Create/reuse User entity with: id, name, email, role, createdAt, updatedAt.
Role must be SUPER_ADMIN, ADMIN, USER.
Add repository and a small auth service/controller as needed.
Add POST /api/auth/dev-login accepting email and returning user details + role.
Reject unknown emails with 401.
Seed 3 dummy users: superadmin@syf.com (SUPER_ADMIN), admin@syf.com (ADMIN), user@syf.com (USER).
Keep this clearly temporary and structured so Okta authentication can replace it later.
Ensure the endpoint works with the existing Spring Security configuration.
