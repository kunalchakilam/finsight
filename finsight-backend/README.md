const API_BASE_URL = "http://localhost:8080/api";

async function apiRequest(
  endpoint,
  options = {}
) {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }
  );

  if (!response.ok) {
    let errorData;

    try {
      errorData = await response.json();
    } catch {
      errorData = {
        message: "Something went wrong",
      };
    }

    throw new Error(
      errorData.message || "API request failed"
    );
  }

  // DELETE returns 204 with no body
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default apiRequest;
