function TransactionCard({
  title,
  amount,
  category,
  type,
}) {
  return (
    <div className="transaction-card">

      <div className="transaction-info">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>

      <div className="transaction-right">
        <span className={type === "Income" ? "income-tag" : "expense-tag"}>
          {type}
        </span>

        <h3>
          ₹{amount.toLocaleString()}
        </h3>
      </div>

    </div>
  );
}

export default TransactionCard;