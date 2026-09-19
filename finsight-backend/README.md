Audit the quiz creation frontend datetime handling for a timezone conversion bug.
1. Inspect the date/time picker and the exact value sent in the create-quiz API request.
2. Verify whether the selected Stamford, CT time is being converted through the browser's local timezone.
3. Treat the selected scheduling value as America/New_York.
4. Do not use the laptop/browser timezone to reinterpret the selected ET wall-clock value.
5. Inspect all new Date(), toISOString(), Date.parse(), timezone conversion and formatting logic around quiz scheduling.
6. Log the selected value and final API payload before submission.
7. Ensure selecting 3:25 PM ET sends a value representing 3:25 PM America/New_York.
8. Also inspect the quiz list/detail response formatting for a second conversion before display.
9. Fix only the confirmed timezone conversion issue.
10. Keep the existing date picker and UI unchanged.
