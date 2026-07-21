function BalanceCard({ balance }) {

  return (
    <div className="card">

      <h2>Current Balance</h2>

      <h1 className="balance">
        ₹{balance.toLocaleString()}
      </h1>

    </div>
  );

}

export default BalanceCard;