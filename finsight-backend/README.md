Build the Excel Question Bank upload UI for the existing Topics & Question Bank feature.

Use the existing feature structure:
src/features/topicsQuestionBank/

Do not modify Quiz Management or the existing Topics/Questions API integration.

1. In TopicsDashboard.jsx, make the existing "Upload Questions" button open an upload modal.

2. Create:
- QuestionUploadModal.jsx
- QuestionUploadPreview.jsx

Keep both directly inside:
src/features/topicsQuestionBank/

Do not create another components/pages folder.

3. Upload modal design must match the existing ISHack / Quiz Management UI:
- Clean white background
- Same typography, spacing and borders
- Amber primary button
- Subtle shadows
- Professional corporate appearance
- No dark/gamified styling

4. Modal content:
Title: "Upload Questions"
Description:
"Upload an Excel file to add questions to the question bank."

5. Add a drag-and-drop/file selection area:
- Excel/file icon
- "Drop your Excel file here"
- "or Browse"
- Accept only .xlsx files
- Show selected file name and file size after selection.

6. Buttons:
- Cancel
- Preview

Preview should remain disabled until a valid .xlsx file is selected.

7. Add basic frontend validation:
- File is required.
- Only .xlsx files are allowed.
- Show a clear inline validation message for invalid files.
- Do not upload the file yet if the backend preview API is unavailable.

8. Add the API method to the existing centralized:
src/api.js

Use this structure:

api.questions = {
    importPreview: (file) => ...
};

The method should prepare FormData using:
formData.append("file", file)

and call:
POST /api/questions/import/preview

Set the request as multipart/form-data appropriately.
Do not create a separate API/service file.

9. The modal should call api.questions.importPreview(file) when Preview is clicked.

10. Handle these states:
- selecting file
- uploading/previewing
- successful preview
- preview error

11. While previewing, disable buttons and show:
"Preparing preview..."

12. On successful response, replace the upload form with QuestionUploadPreview.jsx.

13. QuestionUploadPreview should display:
- File name
- Total rows
- Valid questions
- Questions with errors
- List of invalid rows with row number and error message
- List/table of valid questions with question, category and correct answer

14. Add:
"Back"
button to return to file selection.

15. Add an "Import Questions" button visually, but keep it disabled for now because the final import API has not been implemented.

16. Do not save anything locally as mock data.
Do not create mock preview responses.

17. If the API returns an error, show:
"Unable to prepare preview. Please try again."

18. Refreshing/reloading the page should not affect existing Topics & Question Bank functionality.

19. Keep the implementation simple and reusable for the final import flow later.

20. Verify the application builds successfully.
