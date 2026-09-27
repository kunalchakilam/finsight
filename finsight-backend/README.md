Implement the complete Admin Management backend for ISQuest.

1. Only SUPER_ADMIN can access Admin Management APIs; ADMIN must receive 403.
2. Add GET /api/admins returning all users with role ADMIN or SUPER_ADMIN: id, name, SSO, email, role and lastUpdatedDate.
3. Add GET /api/admins/search?sso={sso} to find an existing user by exact 9-digit SSO and return their details/current role.
4. Add POST /api/admins to assign an existing user the role ADMIN or SUPER_ADMIN; never create a duplicate User.
5. Derive the acting SUPER_ADMIN from the authenticated security context; never accept changedBy or role authority from the frontend.
6. Create an immutable AdminRoleChangeLog storing affectedUserId, previousRole, newRole, changedByUserId and changedAt.
7. Create an audit record whenever a user's role is changed.
8. Add GET /api/admins/{userId}/history returning previous role, new role, changed-by name and timestamp.
9. Keep the existing User table/authentication model as the source of truth.
10. Do not add edit/delete APIs for audit logs and do not change existing authentication behavior.
