import { useState } from "react";
import TransactionList from "./TransactionList";
import TransactionModal from "./TransactionModal";
import CategoryPickerModal from "./CategoryPickerModal";
import TransactionFilters from "./TransactionFilters";

function TransactionSection({
  transactions,
  onAddTransaction,
  onUpdateTransaction,
  onDeleteTransaction,
  categories,
  accounts,
  onAddCategory,
}) {
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState("Expense");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All Time");
  const [sortBy, setSortBy] = useState("Newest");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [accountFilter, setAccountFilter] = useState("All");

  function handleCategorySelect(category, type) {
    setSelectedCategory(category);
    setSelectedType(type);
    setSelectedTransaction(null);

    setShowCategoryPicker(false);
    setShowTransactionModal(true);
  }

  function handleTransactionClick(transaction) {
    setSelectedTransaction(transaction);
    setSelectedCategory(transaction.category);
    setSelectedType(transaction.type);
    setShowTransactionModal(true);
  }

  function closeModal() {
    setShowTransactionModal(false);
    setSelectedTransaction(null);
    setSelectedCategory(null);
  }

  function clearFilters() {
  setSearch("");
  setTypeFilter("All");
  setDateFilter("All Time");
  setSortBy("Newest");
  setCategoryFilter("All");
  setAccountFilter("All");
}

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - 7);

  const monthStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );

  const filteredTransactions = transactions
    .filter((transaction) => {
      const query = search.toLowerCase();

      const matchesSearch =
        transaction.title
          .toLowerCase()
          .includes(query) ||
        transaction.account
          .toLowerCase()
          .includes(query) ||
        transaction.category?.name
          ?.toLowerCase()
          .includes(query);

      const matchesType =
        typeFilter === "All" ||
        transaction.type === typeFilter;

      const matchesCategory =
  categoryFilter === "All" ||
  transaction.category?.id ===
    Number(categoryFilter);

    const matchesAccount =
  accountFilter === "All" ||
  transaction.account ===
    accounts.find(
      (account) => account.id === Number(accountFilter)
    )?.name;

      const transactionDate = new Date(
        transaction.date
      );
      transactionDate.setHours(0, 0, 0, 0);

      let matchesDate = true;

      switch (dateFilter) {
        case "Today":
          matchesDate =
            transactionDate.getTime() ===
            today.getTime();
          break;

        case "Yesterday":
          matchesDate =
            transactionDate.getTime() ===
            yesterday.getTime();
          break;

        case "This Week":
          matchesDate =
            transactionDate >= weekStart;
          break;

        case "This Month":
          matchesDate =
            transactionDate >= monthStart;
          break;

        default:
          matchesDate = true;
      }

      return (
  matchesSearch &&
  matchesType &&
  matchesCategory &&
  matchesAccount &&
  matchesDate
);
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return (
            new Date(b.date) -
            new Date(a.date)
          );

        case "Oldest":
          return (
            new Date(a.date) -
            new Date(b.date)
          );

        case "Highest":
          return b.amount - a.amount;

        case "Lowest":
          return a.amount - b.amount;

        case "A-Z":
          return a.title.localeCompare(
            b.title
          );

        case "Z-A":
          return b.title.localeCompare(
            a.title
          );

        default:
          return 0;
      }
    });

  return (
    <div className="card">
      <div className="section-header">
        <h2>Recent Transactions</h2>

        <button
          className="primary-btn"
          onClick={() =>
            setShowCategoryPicker(true)
          }
        >
          + Add Transaction
        </button>
      </div>

      {showCategoryPicker && (
        <CategoryPickerModal
          categories={categories}
          onClose={() =>
            setShowCategoryPicker(false)
          }
          onCategorySelect={handleCategorySelect}
          onAddCategory={onAddCategory}
        />
      )}

      {showTransactionModal && (
        <TransactionModal
          transaction={selectedTransaction}
          category={selectedCategory}
          transactionType={selectedType}
          categories={categories}
          accounts={accounts}
          onCancel={closeModal}
          onAddTransaction={onAddTransaction}
          onUpdateTransaction={onUpdateTransaction}
          onDeleteTransaction={onDeleteTransaction}
        />
      )}

      <TransactionFilters
  search={search}
  setSearch={setSearch}
  typeFilter={typeFilter}
  setTypeFilter={setTypeFilter}
  dateFilter={dateFilter}
  setDateFilter={setDateFilter}
  sortBy={sortBy}
  setSortBy={setSortBy}
  categoryFilter={categoryFilter}
  setCategoryFilter={setCategoryFilter}
  accountFilter={accountFilter}
  setAccountFilter={setAccountFilter}
  categories={categories}
  accounts={accounts}
  clearFilters={clearFilters}
  filteredCount={filteredTransactions.length}
  totalCount={transactions.length}
/>

      <TransactionList
        transactions={filteredTransactions}
        onTransactionClick={
          handleTransactionClick
        }
      />
    </div>
  );
}

export default TransactionSection;