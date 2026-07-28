import { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import defaultCategories from "./data/defaultCategories";

function App() {
  const [categories, setCategories] = useState(defaultCategories);

  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Cash",
      type: "Cash",
      icon: "💵",
      balance: 500,
      isDefault: true,
    },
    {
      id: 2,
      name: "HDFC Bank",
      type: "Bank",
      icon: "🏦",
      balance: 44000,
      isDefault: false,
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Swiggy",
      amount: 500,
      type: "Expense",
      category: {
        id: 1,
        name: "Food",
        emoji: "🍔",
        color: "#FFE8B5",
      },
      account: "Cash",
      date: "2026-07-28",
      notes: "",
    },
    {
      id: 2,
      title: "Salary",
      amount: 45000,
      type: "Income",
      category: {
        id: 101,
        name: "Salary",
        emoji: "💰",
        color: "#D5F5D5",
      },
      account: "HDFC Bank",
      date: "2026-07-28",
      notes: "",
    },
  ]);

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  function applyTransaction(account, transaction) {
    return {
      ...account,
      balance:
        transaction.type === "Income"
          ? account.balance + transaction.amount
          : account.balance - transaction.amount,
    };
  }

  function reverseTransaction(account, transaction) {
    return {
      ...account,
      balance:
        transaction.type === "Income"
          ? account.balance - transaction.amount
          : account.balance + transaction.amount,
    };
  }

  function addTransaction(transaction) {
    setTransactions((prev) => [...prev, transaction]);

    setAccounts((prev) =>
      prev.map((account) =>
        account.name === transaction.account
          ? applyTransaction(account, transaction)
          : account
      )
    );
  }

  function updateTransaction(updatedTransaction) {
    const oldTransaction = transactions.find(
      (transaction) =>
        transaction.id === updatedTransaction.id
    );

    if (!oldTransaction) return;

    setAccounts((prev) => {
      let updatedAccounts = [...prev];

      updatedAccounts = updatedAccounts.map((account) =>
        account.name === oldTransaction.account
          ? reverseTransaction(account, oldTransaction)
          : account
      );

      updatedAccounts = updatedAccounts.map((account) =>
        account.name === updatedTransaction.account
          ? applyTransaction(account, updatedTransaction)
          : account
      );

      return updatedAccounts;
    });

    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
  }

  function deleteTransaction(id) {
    const transaction = transactions.find(
      (t) => t.id === id
    );

    if (!transaction) return;

    setAccounts((prev) =>
      prev.map((account) =>
        account.name === transaction.account
          ? reverseTransaction(account, transaction)
          : account
      )
    );

    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  function addCategory(category) {
    setCategories((prev) => [
      ...prev,
      {
        ...category,
        id: Date.now(),
      },
    ]);
  }

  function addAccount(account) {
    setAccounts((prev) => [
      ...prev,
      {
        ...account,
        id: Date.now(),
      },
    ]);
  }

  function updateAccount(updatedAccount) {
    setAccounts((prev) =>
      prev.map((account) =>
        account.id === updatedAccount.id
          ? updatedAccount
          : account
      )
    );
  }

  return (
    <div className="app">
      <DashboardPage
        balance={totalBalance}
        accounts={accounts}
        categories={categories}
        transactions={transactions}
        onAddTransaction={addTransaction}
        onUpdateTransaction={updateTransaction}
        onDeleteTransaction={deleteTransaction}
        onAddCategory={addCategory}
        onAddAccount={addAccount}
        onUpdateAccount={updateAccount}
      />
    </div>
  );
}

export default App;