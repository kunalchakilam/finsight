Now implement the actual wheel inside SpinWheelQuiz. Treat this as a custom UI component, not a generic spinner library.

1. Build the wheel as a true circular radial layout.
2. The wheel must always remain a perfect circle using a fixed aspect ratio of 1:1.
3. Calculate segmentAngle = 360 / remainingQuestions.length.
4. Render each segment as a radial wedge covering exactly segmentAngle degrees.
5. Use CSS conic-gradient or an equivalent radial rendering technique so the segments form one continuous perfect wheel.
6. All segments use the same solid charcoal-gray background.
7. Add thin light-gray/white radial divider lines between every segment.
8. Add a subtle outer border/shadow around the complete wheel.
9. Put the topic name centered inside each segment and rotate the text to follow the segment direction.
10. Automatically reduce font size when there are many segments so labels remain inside their wedges.
11. Never allow topic text to overlap the center button, wheel boundary or neighboring labels.
12. Place a circular SPIN button exactly at the wheel center, above the wheel segments.
13. Place one fixed triangular pointer at the 3 o'clock/right edge of the wheel.
14. The pointer must NOT rotate with the wheel.
15. The wheel rotates underneath the fixed pointer during the 3-second animation.
16. After the backend returns wheelIndex, calculate the exact rotation required to place that segment under the pointer.
17. Do not randomly choose the target segment on the frontend.
18. Do not use a prebuilt colorful roulette/wheel component.
19. Do not use different colors for individual segments.
20. The result should visually match the provided reference image: simple, large, circular, radial, clean and professional.
