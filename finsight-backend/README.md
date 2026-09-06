Connect the existing React Quiz Management frontend to the Quiz Management backend API.

Use ONLY ONE centralized API file:
src/api.js

Do not create separate API/service files such as quizService.js, api/quizApi.js, services/, etc.

Create src/api.js with this structure and keep it extensible:

import axios from "axios";

// config
const BASE_URL = window._env_?.ISQUEST_API_URL;

// create axios instance with defaults

// auth interceptor

// response interceptor

// API methods

const api = {
    // quizzes
};

export default api;

Implementation requirements:

1. Import axios correctly.

2. Use:
const BASE_URL = window._env_?.ISQUEST_API_URL;

3. Create one axios instance using BASE_URL with sensible defaults:
- baseURL
- JSON content type
- Accept JSON

4. Add an auth request interceptor.
For now, do NOT implement a real authentication flow.
If a token already exists in localStorage/sessionStorage, attach it as:
Authorization: Bearer <token>
Otherwise leave the request unchanged.

5. Add a response interceptor:
- Return response.data for successful responses.
- Handle API errors consistently.
- Do not show UI alerts from the interceptor.
- Preserve/rethrow the original error so components can handle it.

6. Add only the Quiz Management API methods currently required:
const api = {
    quizzes: {
        getAll: () => ...,
        search: (search) => ...
    }
};

Both should call:
GET /api/quizzes

For search, send the search term as the query parameter:
?search=<term>

7. Update QuizManagement.jsx to use api.quizzes instead of mockQuizzes.js.

8. On initial page load:
- Call api.quizzes.getAll()
- Store the returned quizzes in component state.
- Show the existing quiz cards using API data.

9. Search:
- Use the existing search bar.
- Call api.quizzes.search(searchTerm) when appropriate.
- Keep the existing UI and search behavior.
- Do not move search logic into api.js beyond making the API request.

10. Remove the dependency on mockQuizzes.js from QuizManagement.jsx.
Do not delete mockQuizzes.js yet; keep it as a fallback/reference until the API integration is verified.

11. Preserve the existing UI exactly:
- Header/sidebar/footer
- Quiz Management title/description
- Stats
- Search bar
- Quiz cards
- Status/visibility/owner/participant information
- Manage and Create Quiz buttons

12. Calculate the displayed Quiz Management statistics from the API response exactly as the current frontend calculates them from mock data. Do not hardcode statistics.

13. Add simple loading and error states without redesigning the page:
- Loading: show a small "Loading quizzes..." message.
- Error: show a small "Unable to load quizzes." message.
Do not use a new notification library.

14. Do not implement POST/create quiz yet.
The Create Quiz button remains a placeholder.

15. Do not add authentication, WebSocket, Redis, or other backend integrations yet.

16. Verify imports, API calls, and the application build successfully.
