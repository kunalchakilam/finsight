Standardize all ISQuest quiz scheduling and business time handling to Stamford, Connecticut time.
1. Use America/New_York as the single application timezone, representing Stamford, CT.
2. Never use the server, browser or laptop local timezone for quiz scheduling or business logic.
3. Backend must interpret quiz creation start/end times as America/New_York.
4. Future-time validation must compare against the current time in America/New_York.
5. Quiz UPCOMING, ACTIVE and COMPLETED status transitions must use America/New_York.
6. Audit all LocalDateTime, ZonedDateTime, ZoneId and date parsing currently used.
7. Remove inconsistent local-time conversions and timezone assumptions.
8. Do not hardcode UTC-5; America/New_York automatically handles EST/EDT.
9. Store timestamps consistently without changing the intended instant.
10. API responses must preserve enough timezone/offset information for correct frontend display.
11. Do not change unrelated quiz functionality.
