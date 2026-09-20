Rebuild ONLY the Spin Wheel UI to visually match the attached reference image as closely as possible.
Treat the attached image as the exact design reference, NOT as general inspiration.

IMPORTANT:
Do not create a generic roulette wheel.
Do not use colorful segments.
Do not redesign the wheel.
Do not change the text positioning or typography style.
Reproduce the same geometry, proportions, alignment and visual hierarchy.

IMPLEMENTATION:
1. Create the wheel as a dedicated reusable SpinWheel component/page, separate from QuizEntry.
2. Prefer SVG for the wheel so radial segments, dividers, text rotation and pointer can be positioned precisely.
3. The wheel must be a perfect circle with a 1:1 aspect ratio.
4. The wheel should occupy most of the available left-side screen area.
5. Keep the wheel centered horizontally and vertically in its container.
6. Use ONE solid dark charcoal/near-black color for every segment.
7. Add thin white/light-gray radial divider lines exactly from the center area to the outer edge.
8. Add a subtle light outer border around the entire wheel.
9. Add a subtle shadow around the wheel, matching the reference.
10. Place a circular SPIN button exactly in the center of the wheel.
11. The center button must be dark charcoal, circular, with a thin neon-amber #FFB700 border.
12. Center the word "SPIN" perfectly both horizontally and vertically.
13. Use bold white/near-white text for SPIN.
14. Add ONE fixed triangular pointer at the exact 3-o'clock position on the RIGHT edge of the wheel.
15. The pointer must point LEFT toward the wheel center.
16. The pointer must remain fixed while the wheel rotates underneath it.

SEGMENTS:
17. Number of segments must be completely dynamic: exactly one segment for every remaining question.
18. Calculate every segment angle mathematically as 360 / remainingQuestions.length.
19. Every segment must have exactly equal angular size.
20. Never hardcode 4, 6 or 8 segments.
21. When a question is completed, remove that question and rebuild the wheel using the remaining questions.
22. If 8 questions remain, show 8 equal segments; if 6 remain, show 6; if 3 remain, show 3, etc.
23. The wheel must always remain a perfect circle regardless of question count.

TEXT:
24. Display ONLY the topicName inside each segment.
25. Do NOT display question numbers such as Q1/Q2.
26. Do NOT display the actual question text.
27. Do NOT add icons, badges or extra text inside segments.
28. Use neon amber #FFB700 for all topic text.
29. Topic text must be bold and highly readable.
30. Position each topic name approximately in the middle of its wedge, not near the center and not near the outer edge.
31. Rotate each topic label to follow the radial direction of its segment exactly like the reference image.
32. Keep the text orientation visually consistent with the reference: angled along the wheel's radial direction.
33. Horizontally and vertically center each label within its wedge.
34. Dynamically reduce font size for long topic names or when there are many segments.
35. Never allow labels to cross a divider line, overlap another label, touch the center button or extend outside the wheel.
36. Do not wrap topic names into multiple lines unless absolutely necessary; scale the text instead.

REFERENCE GEOMETRY:
37. The reference has the pointer at 3 o'clock and the wheel's horizontal/vertical radial lines aligned to the screen.
38. Preserve this visual orientation when generating any number of segments.
39. The center SPIN button should cover the inner portion of the radial dividers exactly like the reference.
40. Do not put the SPIN button below, beside or outside the wheel.
41. Do not add a title, heading, instructions, footer or decorative elements around the wheel.

ANIMATION:
42. Clicking SPIN calls the existing backend spin API.
43. Backend remains authoritative for the selected question.
44. Frontend must NOT randomly choose the question.
45. Animate the wheel underneath the fixed pointer for exactly 3 seconds.
46. Calculate the rotation required to place the backend-selected segment precisely under the pointer.
47. Stop with the CENTER of the selected segment aligned exactly with the pointer.
48. Highlight the selected segment using the existing neon-amber treatment only after the wheel stops.
49. Keep the selected segment highlighted while its question is displayed.
50. Do not change the existing question, answer, timer, scoring or result logic.

FINAL REQUIREMENT:
The result must look like the attached reference image:
ONE large charcoal circular wheel,
equal radial wedges,
thin white dividers,
amber angled topic labels,
center circular SPIN button,
fixed right-side triangular pointer,
clean professional appearance,
no rainbow colors,
no gradients,
no question numbers,
no generic roulette styling.
