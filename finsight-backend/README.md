Add Experience Center visibility to the existing Create Quiz flow.

1. Under Visibility, add "Innovation Station & Experience Center Quiz" alongside Public and Private.
2. Store the value as EXPERIENCE_CENTER.
3. Add a short description: "Accessible through the dedicated Experience Center."
4. Allow it throughout the existing create-quiz flow.
5. Show the selected visibility correctly in Review.
6. Send visibility=EXPERIENCE_CENTER in POST /api/quizzes.
7. Show "Innovation Station & Experience Center" on Quiz Management cards/details.
8. Keep EXPERIENCE_CENTER quizzes visible to authorized admins.
9. Do not show them in normal Join a Quiz/public participant lists.
10. Keep Public and Private behavior unchanged.
