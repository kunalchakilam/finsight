Update the ISQuest frontend to display the quiz owner from the backend response.
1. Use ownerName returned by the existing quiz APIs; never derive the owner from frontend login state.
2. Update the quiz data mapping/types to include ownerName.
3. Display "Created by: {ownerName}" on Quiz Management cards wherever quiz ownership is shown.
4. Display the owner on the quiz details/manage view if that view already exists.
5. For public quiz details, display the owner when the API provides ownerName.
6. Remove any hardcoded or locally generated owner names.
7. Do not add a separate API request for every quiz card; use ownerName from the existing quiz response.
8. Keep the existing UI styling and layout unchanged.
