Build the Excel Question Bank upload and preview backend for ISQuest.

Use the existing project structure and existing AWS configuration.

IMPORTANT:
- An existing S3Config.java already exists under config/.
- An existing VaultAwsCredentialProvider.java already exists under config/.
- Reuse these existing classes.
- Do NOT create another S3 configuration, AWS credential provider, or duplicate AWS client configuration.
- Bedrock is NOT required for this feature.

Excel format:
Category, Contributed By, Question, Option 1, Option 2, Option 3, Option 4, Correct Answer

1. Create an upload metadata entity:
QuestionBankUpload
- id: Long, generated
- fileName: String
- s3Key: String
- uploadedBy: String
- uploadedAt: LocalDateTime
- totalRows: Integer
- validRows: Integer
- errorRows: Integer

2. Create the corresponding repository.

3. Create an API endpoint:
POST /api/questions/import/preview

Accept a multipart Excel (.xlsx) file.

4. Store the original uploaded Excel file in the existing Amazon S3 configuration.
Use a unique S3 key such as:
question-bank/{year}/{unique-upload-id}/{original-file-name}

5. Use Apache POI to read the workbook.
Do not use AI/Bedrock for parsing or validation.

6. Validate the header row.
The expected columns are exactly:
Category
Contributed By
Question
Option 1
Option 2
Option 3
Option 4
Correct Answer

7. Validate every data row:
- Category is required.
- Contributed By is required.
- Question is required.
- All four options are required.
- Correct Answer is required.
- Correct Answer must match the VALUE of one of Option 1-4.
- Do not expect values such as "Option 1" or "Option 4".
- Ignore leading/trailing whitespace when comparing the correct answer with option values.
- Do not change the original correct-answer value returned in the preview.

8. Detect duplicate option values within the same question and report them as validation errors.

9. Do not save Topic or Question records to MySQL during preview.

10. Return a preview response containing:
- upload metadata
- original file name
- total rows
- valid rows
- error rows
- row-level validation results

For each invalid row return:
- Excel row number
- validation error message(s)

For valid rows return the parsed question data needed for the confirmation/import step.

11. Keep the preview response as DTO/model classes.
Do not expose JPA entities directly.

12. Create appropriate service classes under the existing service package.
Keep Excel parsing/validation separate from the controller logic.

13. Use the existing exception-handling approach where applicable.

14. Do not implement the final import/confirmation endpoint yet.
This step is ONLY upload + S3 storage + parsing + validation + preview.

15. Do not modify existing Quiz Management or Topic/Question GET APIs.

16. Do not modify existing S3Config.java or VaultAwsCredentialProvider.java unless absolutely required for compilation/integration.

17. Add appropriate multipart file-size/type validation for .xlsx uploads.

18. Verify the application compiles and:
POST /api/questions/import/preview
successfully accepts an .xlsx file, stores the original file in S3, parses it, and returns the validation preview without inserting questions into MySQL.
