Update ISQuest scheduling UI to consistently use Stamford, CT time.
1. Treat America/New_York as the standard timezone for all quiz scheduling.
2. Display "Stamford, CT Time (ET)" beside quiz start/end date-time fields.
3. Do not use the browser or laptop local timezone for scheduling.
4. Send entered date-time values to the backend with the correct America/New_York interpretation.
5. Display existing quiz start/end times using Stamford, CT time.
6. Future-time validation must use the backend's America/New_York time.
7. Do not silently convert scheduled times to the user's machine timezone.
8. Keep the existing date/time picker and UI design unchanged.
9. Do not change unrelated quiz functionality.
