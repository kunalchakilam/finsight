Update the temporary ISQuest development authentication to use SSO only.
Add a unique 9-digit SSO field to the existing User entity.
Keep name, email and role as stored user details, but do not accept them during login.
Seed/update the 3 dummy users with these SSOs:
290000001 SUPER_ADMIN, 290000001 ADMIN, 290000002 USER.
Update POST /api/auth/dev-login to accept only the 9-digit SSO.
Validate that the SSO contains exactly 9 digits and reject unknown SSOs.
Return the resolved user's id, name, email and role.
Remove the previous email-based development login behavior.
Keep this clearly temporary for eventual Okta SSO replacement.
