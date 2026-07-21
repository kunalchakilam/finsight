import { useState } from "react";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";

function TransactionSection({
  transactions,
  onAddTransaction,
}) {
  const [showForm, setShowForm] = useState(false);

  function openForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  return (
    <div className="card">

      <div className="section-header">
        <h2>Recent Transactions</h2>

        <button
          className="primary-btn"
          onClick={openForm}
        >
          + Add Transaction
        </button>
      </div>

      {showForm && (
        <TransactionForm
          onCancel={closeForm}
          onAddTransaction={onAddTransaction}
        />
      )}

      <TransactionList
        transactions={transactions}
      />
    </div>
  );
}

export default TransactionSection;