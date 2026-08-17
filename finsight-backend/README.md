import apiRequest from "./apiClient";

export function getTransactions() {
  return apiRequest("/transactions");
}

export function getTransactionById(id) {
  return apiRequest(`/transactions/${id}`);
}

export function createTransaction(transaction) {
  return apiRequest("/transactions", {
    method: "POST",
    body: JSON.stringify(transaction),
  });
}

export function updateTransaction(id, transaction) {
  return apiRequest(`/transactions/${id}`, {
    method: "PUT",
    body: JSON.stringify(transaction),
  });
}

export function deleteTransaction(id) {
  return apiRequest(`/transactions/${id}`, {
    method: "DELETE",
  });
}
