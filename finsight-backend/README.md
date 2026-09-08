Fix the public quiz question progression and completion logic.
Inspect the existing Quiz configuration, topic/question-pool and participant session implementation first.
When a participant starts, generate their complete eligible question sequence ONCE.
For RANDOM_PER_PARTICIPANT, shuffle/select once and persist the sequence to that participant session.
For SAME_FOR_EVERYONE, use the configured common question sequence.
Store the selected question IDs and current question index in the session.
GET current question must use the persisted sequence and index, never randomly select again.
After the final question is answered or times out, mark the session COMPLETED.
Never return a question after the session is COMPLETED.
