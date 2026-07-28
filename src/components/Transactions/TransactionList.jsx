import TransactionCard from "./TransactionCard";

function formatDate(date) {
  const today = new Date();

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const transactionDate = new Date(date);

  if (transactionDate.toDateString() === today.toDateString()) {
    return "Today";
  }

  if (transactionDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  return transactionDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function TransactionList({
  transactions,
  onTransactionClick,
}) {
  const grouped = {};

  transactions.forEach((transaction) => {
    const key = formatDate(transaction.date);

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(transaction);
  });

  return (
    <div className="transaction-list">
      {Object.entries(grouped).map(([date, items]) => {
        const total = items.reduce(
          (sum, item) =>
            item.type === "Income"
              ? sum + item.amount
              : sum - item.amount,
          0
        );

        return (
          <div
            key={date}
            className="transaction-group"
          >
            <div className="transaction-group-header">
              <h3>{date}</h3>

              <span
                className={
                  total >= 0
                    ? "income"
                    : "expense"
                }
              >
                {total >= 0 ? "+₹" : "-₹"}
                {Math.abs(total).toLocaleString()}
              </span>
            </div>

            {items.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                {...transaction}
                onClick={() =>
                  onTransactionClick(transaction)
                }
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default TransactionList;