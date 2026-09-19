Audit and fix all question randomization in the existing quiz flow.
1. Randomization must happen exactly once when a participant session starts.
2. RANDOM_PER_PARTICIPANT must generate one finite sequence and persist it in the active Redis session.
3. SAME_FOR_EVERYONE must use one stable sequence for every participant.
4. GET current question must only read the persisted sequence and current index.
5. Answer, Next, timeout and refresh must never reshuffle questions.
6. Ensure the number of selected questions exactly matches questionsPerParticipant.
7. Ensure no question can appear twice in the same participant attempt.
8. Ensure completion occurs after the final persisted question.
9. Do not change scoring, timer rules or quiz configuration.
10. Remove any duplicate/random selection logic found in controllers or services.
