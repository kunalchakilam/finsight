import { useState } from "react";
import Header from "./components/Header";
import WelcomeCard from "./components/WelcomeCard";
import BalanceCard from "./components/BalanceCard";
import TransactionSection from "./components/TransactionSection";

function App() {
  const [balance, setBalance] = useState(44500);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Swiggy",
      amount: 500,
      category: "Food",
      type: "Expense",
    },
    {
      id: 2,
      title: "Salary",
      amount: 45000,
      category: "Income",
      type: "Income",
    },
  ]);

  function addTransaction(newTransaction) {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);

    if (newTransaction.type === "Income") {
      setBalance((prevBalance) => prevBalance + newTransaction.amount);
    } else {
      setBalance((prevBalance) => prevBalance - newTransaction.amount);
    }
  }

  return (
    <div className="app">
      <Header />

      <WelcomeCard
        name="Sreekar"
        isLoggedIn={true}
      />

      <BalanceCard balance={balance} />

      <TransactionSection
        transactions={transactions}
        onAddTransaction={addTransaction}
      />
    </div>
  );
}

export default App;