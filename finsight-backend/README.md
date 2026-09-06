Connect the existing Question Bank import preview UI to the final backend import API.

Do not modify the existing Excel upload/preview behavior.

1. Update the existing:
src/api.js

2. Add the import method under the existing questions section:

api.questions = {
    importPreview: ...,
    import: ...
};

3. The import method must call:
POST /api/questions/import

4. Send the uploadId/preview reference required by the backend.
Use the exact request DTO/API contract implemented by the backend.
Do not upload the Excel file again.

5. Update QuestionUploadPreview.jsx.

6. Enable the existing "Import Questions" button.

7. When clicked:
- Call api.questions.import(...)
- Disable Import and Back buttons.
- Show "Importing..." while the request is running.

8. On successful import, show a success state containing:
- Imported questions count
- Skipped rows count
- Topics created count
- Topics reused count

9. Add a "Done" button to the success state.

10. When Done is clicked:
- Close the upload modal.
- Refresh the Topics list using api.topics.getAll().
- Ensure the updated question counts are displayed immediately.

11. On import failure:
- Keep the user in the preview modal.
- Show a clear error message:
  "Unable to import questions. Please try again."
- Re-enable the Import button.

12. Do not fall back to mock data.

13. Do not create another API/service file.

14. Preserve the existing Topics & Question Bank styling and layout.

15. Do not modify Quiz Management.

16. Verify the complete frontend flow:
Select Excel → Preview → Import → Success → Done → refreshed Topics.
