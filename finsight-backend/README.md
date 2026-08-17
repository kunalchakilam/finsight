import apiRequest from "./apiClient";

export function getAccounts() {
  return apiRequest("/accounts");
}

export function getAccountById(id) {
  return apiRequest(`/accounts/${id}`);
}

export function createAccount(account) {
  return apiRequest("/accounts", {
    method: "POST",
    body: JSON.stringify(account),
  });
}

export function updateAccount(id, account) {
  return apiRequest(`/accounts/${id}`, {
    method: "PUT",
    body: JSON.stringify(account),
  });
}

export function deleteAccount(id) {
  return apiRequest(`/accounts/${id}`, {
    method: "DELETE",
  });
}
