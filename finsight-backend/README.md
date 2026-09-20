Verify that the backend is not changing the quiz scheduling time during quiz creation.
1. Log the raw startDateTime/endDateTime received by POST /api/quizzes.
2. Log the values immediately before saving the Quiz entity.
3. Log the values read back from the database after creation.
4. Do not convert or adjust the incoming ET wall-clock value if it already contains the correct America/New_York offset.
5. Check for automatic LocalDateTime → UTC/Instant → local timezone conversions.
6. Check JPA/Hibernate/JDBC timezone configuration for the quiz datetime fields.
7. If the backend receives 8:20 AM but saves 12:20 PM, fix the backend conversion.
8. If the backend receives 12:20 PM, do not change the backend; the frontend payload conversion is the issue.
9. Use America/New_York consistently and never hardcode an hour offset.
