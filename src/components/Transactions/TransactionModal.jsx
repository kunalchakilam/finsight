import { useEffect, useState } from "react";
import CategoryPickerModal from "./CategoryPickerModal";

function TransactionModal({
  transaction,
  category,
  transactionType,
  categories,
  accounts,
  onCancel,
  onAddTransaction,
  onUpdateTransaction,
  onDeleteTransaction,
}) {
  const isEdit = !!transaction;

  const defaultAccount =
    accounts.find((a) => a.isDefault)?.name || "";

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState(transactionType);
  const [account, setAccount] = useState(defaultAccount);
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [notes, setNotes] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(category);

  const [showCategoryPicker, setShowCategoryPicker] =
   useState(false);

  const [errors, setErrors] = useState({
    title: "",
    amount: "",
  });

  useEffect(() => {
    if (transaction) {
      setTitle(transaction.title);
      setAmount(transaction.amount);
      setType(transaction.type);
      setAccount(transaction.account);
      setDate(transaction.date);
      setNotes(transaction.notes || "");
      setSelectedCategory(transaction.category);
    } else {
      setTitle("");
      setAmount("");
      setType(transactionType);
      setAccount(defaultAccount);
      setDate(new Date().toISOString().split("T")[0]);
      setNotes("");
      setSelectedCategory(category);
    }

    setErrors({
      title: "",
      amount: "",
    });
  }, [transaction, category, transactionType, defaultAccount]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onCancel();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [onCancel]);

  function validate() {
    const newErrors = {
      title: "",
      amount: "",
    };

    let valid = true;

    if (!title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }

    if (!amount || Number(amount) <= 0) {
      newErrors.amount =
        "Amount must be greater than 0";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  }

  function handleCategoryChange(category) {
  setSelectedCategory(category);
  setShowCategoryPicker(false);
}

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const data = {
      id: isEdit ? transaction.id : Date.now(),
      title,
      amount: Number(amount),
      type,
      category: selectedCategory,
      account,
      date,
      notes,
    };

    if (isEdit) {
      onUpdateTransaction(data);
    } else {
      onAddTransaction(data);
    }

    onCancel();
  }

  function handleDelete() {
    if (!isEdit) return;

    const confirmDelete = window.confirm(
      "Delete this transaction?"
    );

    if (!confirmDelete) return;

    onDeleteTransaction(transaction.id);
    onCancel();
  }

  return (
    <div
      className="modal-overlay"
      onClick={onCancel}
    >
      <div
        className="transaction-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="transaction-form"
          onSubmit={handleSubmit}
        >
          <div className="transaction-header">
            <div className="header-left">
              <div
                className="header-icon"
                style={{
                  background:
                    selectedCategory?.color,
                }}
              >
                {selectedCategory?.emoji}
              </div>

              <h2>
                {isEdit
                  ? "Edit Transaction"
                  : "Add Transaction"}
              </h2>
            </div>

            <div className="header-actions">
              {isEdit && (
                <button
                  type="button"
                  className="delete-btn"
                  onClick={handleDelete}
                >
                  🗑
                </button>
              )}

              <button
                type="button"
                className="close-btn"
                onClick={onCancel}
              >
                ✕
              </button>
            </div>
          </div>

          <div className="type-toggle">
            <button
              type="button"
              className={
                type === "Expense"
                  ? "toggle active-expense"
                  : "toggle"
              }
              onClick={() =>
                setType("Expense")
              }
            >
              Expense
            </button>

            <button
              type="button"
              className={
                type === "Income"
                  ? "toggle active-income"
                  : "toggle"
              }
              onClick={() =>
                setType("Income")
              }
            >
              Income
            </button>
          </div>

          <div className="form-group">
            <label>Amount</label>

            <input
              className={`amount-input ${
                errors.amount
                  ? "input-error"
                  : ""
              }`}
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />

            {errors.amount && (
              <small className="error-text">
                {errors.amount}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Title</label>

            <input
              className={
                errors.title
                  ? "input-error"
                  : ""
              }
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            {errors.title && (
              <small className="error-text">
                {errors.title}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>Category</label>

            <div
  className="category-preview"
  onClick={() => setShowCategoryPicker(true)}
>
  <div className="category-left">
    <span>{selectedCategory?.emoji}</span>

    <span>{selectedCategory?.name}</span>
  </div>

  <span>›</span>
</div>
          </div>

          <div className="form-group">
            <label>Account</label>

            <select
              value={account}
              onChange={(e) =>
                setAccount(e.target.value)
              }
            >
              {accounts.map((acc) => (
                <option
                  key={acc.id}
                  value={acc.name}
                >
                  {acc.icon} {acc.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Notes</label>

            <textarea
              rows="4"
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="save-btn"
          >
            {isEdit
              ? "Save Changes"
              : "Add Transaction"}
          </button>

          <button
            type="button"
            className="cancel-text-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </div>

      {showCategoryPicker && (
  <CategoryPickerModal
    categories={categories}
    onClose={() =>
      setShowCategoryPicker(false)
    }
    onAddCategory={() => {}}
    onCategorySelect={(category) =>
      handleCategoryChange(category)
    }
  />
)}
    </div>
  );
}

export default TransactionModal;