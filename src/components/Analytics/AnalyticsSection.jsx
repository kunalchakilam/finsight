import ExpensePieChart from "./ExpensePieChart";

function AnalyticsSection({
  transactions,
}) {
  return (
    <div className="analytics-section">
      <ExpensePieChart
        transactions={transactions}
      />
    </div>
  );
}

export default AnalyticsSection;