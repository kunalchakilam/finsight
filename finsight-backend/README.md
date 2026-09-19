Fix question randomization in the existing ISQuest quiz session flow using the database only.
1. Generate the participant's complete question sequence exactly once when the quiz session starts.
2. For RANDOM_PER_PARTICIPANT, randomly select/shuffle the configured questionsPerParticipant once.
3. Persist that exact question sequence with the participant session.
4. For SAME_FOR_EVERYONE, generate/use one stable sequence and do not reshuffle it.
5. GET current question must read only the persisted sequence and current question index.
6. Answer, Next, timeout and refresh must never generate or shuffle questions again.
7. Ensure the number of questions exactly matches questionsPerParticipant.
8. Ensure no question appears twice in the same participant attempt.
9. Mark the session COMPLETED after the final persisted question is answered or times out.
10. Remove any duplicate/random selection logic from controllers or services.
11. Do not change scoring, timer rules or existing API contracts.
