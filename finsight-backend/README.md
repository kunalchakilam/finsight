Debug the quiz scheduling timezone mismatch without changing unrelated functionality.
I selected 3:25 PM Stamford, CT time (America/New_York), but the created quiz is showing 7:24 PM EDT.
1. Trace the complete datetime flow: frontend date picker → request payload → controller → service → entity/database → response → frontend display.
2. Log the exact datetime and timezone/offset at every stage.
3. Check whether the frontend is converting the selected ET time using the browser's local timezone before sending it.
4. Check whether the backend is interpreting an ET wall-clock value as IST/local time and converting it again.
5. Check whether the database/JPA timezone configuration is applying another conversion.
6. Check whether the response is being converted again before frontend display.
7. Use America/New_York as the single business timezone for quiz scheduling.
8. A value selected as 3:25 PM America/New_York must remain 3:25 PM ET when stored/displayed as the scheduled quiz time.
9. Do not fix this by adding a hardcoded hour offset.
10. After identifying the exact conversion causing the mismatch, fix that conversion and verify create, GET, edit and display flows.
11. Keep the actual instant consistent internally while preserving the intended ET wall-clock time shown to users.
