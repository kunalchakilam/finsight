Revise Create Quiz Step 2 (Questions) in src/features/quizManagement/.

Keep the existing 3-step flow:
Basic Details → Questions → Review.

Step 2:
1. Show "Select from Question Bank" enabled.
2. Show "Create Custom Questions" disabled with "Coming Soon".
3. For each topic configuration show:
   - Topic dropdown
   - Available question count
   - Question Pool:
     • Use all available questions
     • Select questions manually
   - Questions per Participant
   - Selection Mode:
     • Same Questions for Everyone
     • Random Per Participant
   - Remove topic
4. If manual selection is chosen, show "Select Questions".
   Open a searchable question selector with checkboxes.
   Show selected question count and allow select/deselect.
5. Validate questions per participant <= pool size.
6. Show total questions per participant across topics.
7. Time per question is fixed at 20 seconds and read-only.
8. Replace quiz-level marking scheme with per-question marking.
   All questions default to Standard.
   Allow selected/eligible questions to be marked:
   - Standard: 600 base + time bonus
   - Double Points: 1200 base + time bonus
9. Add "Configure Question Points" action to manage this.
10. Back preserves all configuration; Next stores it in CreateQuiz state.
11. Do not call the create API yet.
12. Use existing API/layout patterns and clean ISHack-style UI.
13. Do not implement custom questions or advanced settings.
