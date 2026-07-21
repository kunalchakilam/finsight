import { useState } from "react";

function TransactionForm({ onCancel, onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Expense");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !category) {
      alert("Please fill all fields.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      type,
    };

    onAddTransaction(newTransaction);

    // Reset form
    setTitle("");
    setAmount("");
    setCategory("");
    setType("Expense");

    onCancel();
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Netflix Subscription"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          placeholder="Food, Salary, Shopping..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="primary-btn"
        >
          Save Transaction
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;