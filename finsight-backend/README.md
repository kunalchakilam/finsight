Fix the existing Spin the Wheel frontend to stay synchronized with the backend session state.

1. When the spin API returns a selected question, display THAT exact question from the spin response.
2. Do not call the generic next-question API after a successful spin.
3. The returned questionId, topicName and question/options must remain together as one current-question state.
4. The wheel segment selected by the backend must correspond to the topicName of the displayed question.
5. When submitting an answer, send the exact current questionId and selected option VALUE from the displayed question.
6. Do not send option index, option position or stale question data.
7. For an incorrect answer, display the correctAnswer returned by the answer API and highlight that exact option.
8. Reset answer state only when a genuinely new question is received.
9. On reopening the same quiz as the same authenticated user, use the existing/resumed session returned by the backend.
10. Restore the current question, remaining wheel segments, score and progress from that session instead of starting from Q1.
11. If the resumed session is already COMPLETED, load the final result directly.
12. Closing/reopening the browser tab must not create a new session or advance/complete the existing session.
13. Prevent duplicate spin, answer and next API requests.
14. Keep the existing wheel design, 3-second animation, 20-second timer, scoring and result UI unchanged.
