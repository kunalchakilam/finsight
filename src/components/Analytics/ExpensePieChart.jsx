import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#6366F1",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#0EA5E9",
  "#A855F7",
  "#FACC15",
];

function ExpensePieChart({ transactions }) {
  const expenseTransactions = transactions.filter(
    (t) => t.type === "Expense"
  );

  const grouped = {};

  expenseTransactions.forEach((transaction) => {
    const key = transaction.category.name;

    grouped[key] =
      (grouped[key] || 0) + transaction.amount;
  });

  const data = Object.entries(grouped).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="analytics-card">
      <h3>Expense by Category</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;