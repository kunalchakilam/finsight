function TransactionCard({
  title,
  amount,
  type,
  category,
  account,
  onClick,
}) {
  return (
    <div
      className="transaction-card"
      onClick={onClick}
    >
      <div className="transaction-top">
        <div className="transaction-info">
          <div
            className="transaction-icon"
            style={{
              background: category?.color,
            }}
          >
            {category?.emoji}
          </div>

          <div>
            <h4>{title}</h4>

            <span className="account-pill">
              {account}
            </span>
          </div>
        </div>

        <span
          className={`transaction-tag ${
            type === "Income"
              ? "income-tag"
              : "expense-tag"
          }`}
        >
          {type}
        </span>
      </div>

      <div
        className={`transaction-amount ${
          type === "Income"
            ? "income-text"
            : "expense-text"
        }`}
      >
        {type === "Income" ? "+" : "-"}₹
        {amount.toLocaleString()}
      </div>
    </div>
  );
}

export default TransactionCard;