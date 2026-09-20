Fix the quiz creation datetime conversion bug in the frontend.
The user selects 8:20 AM EDT (Stamford, CT / America/New_York), but immediately after clicking Create Quiz the backend receives/stores 12:20 PM EDT.
1. Inspect the exact startDateTime and endDateTime values immediately before the Create Quiz API request.
2. Trace the complete transformation from the date/time picker state to the POST /api/quizzes payload.
3. Look specifically for new Date(), toISOString(), Date.parse(), getTimezoneOffset(), UTC conversion or browser-local timezone conversion.
4. The selected 8:20 AM America/New_York wall-clock time must be sent to the backend as 8:20 AM America/New_York, not converted from the laptop's IST timezone.
5. Do not add or subtract a hardcoded 4/5 hour offset.
6. Use America/New_York explicitly when converting the selected scheduling value.
7. Ensure the request payload contains the intended ET time before the API call is made.
8. Log the selected picker value and final request payload temporarily so the conversion can be verified.
9. After fixing, verify that selecting 8:20 AM EDT results in exactly 8:20 AM EDT after quiz creation.
10. Also verify that the existing date validation still correctly rejects past ET times.
