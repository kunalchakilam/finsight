import StatCard from "./StatCard";

function StatsGrid({
  transactions,
}) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce(
      (sum, t) => sum + t.amount,
      0
    );

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce(
      (sum, t) => sum + t.amount,
      0
    );

  const savings =
    income - expense;

  return (
    <div className="stats-grid">
      <StatCard
        title="Income"
        value={`₹${income.toLocaleString()}`}
        icon="📈"
        color="#DCFCE7"
      />

      <StatCard
        title="Expense"
        value={`₹${expense.toLocaleString()}`}
        icon="📉"
        color="#FEE2E2"
      />

      <StatCard
        title="Savings"
        value={`₹${savings.toLocaleString()}`}
        icon="💰"
        color="#DBEAFE"
      />

      <StatCard
        title="Transactions"
        value={transactions.length}
        icon="🧾"
        color="#F3E8FF"
      />
    </div>
  );
}

export default StatsGrid;