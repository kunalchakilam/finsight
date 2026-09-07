Update Quiz creation to support scheduling.

1. Change Quiz status to:
   UPCOMING, ACTIVE, COMPLETED.

2. Add to Quiz:
   - scheduleMode (NOW/LATER)
   - startDateTime (nullable)
   - endDateTime (nullable)

3. Update CreateQuizRequest and QuizResponse accordingly.

Validation:
- scheduleMode is required.
- NOW requires startDateTime and endDateTime.
- NOW start must be future.
- NOW end must be after start.
- LATER must allow null dates.

Every newly created quiz must start as UPCOMING.
Never create a quiz as ACTIVE.

Reuse existing Quiz service/controller/DTO structure.
Do not implement automatic status transitions yet.
