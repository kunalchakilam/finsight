import { TrendingUp } from "lucide-react";

function BalanceCard({ balance }) {
  return (
    <div className="balance-card">
      <div className="balance-header">
        <div>
          <p className="balance-title">Total Balance</p>

          <h1 className="balance-amount">
            ₹{balance.toLocaleString()}
          </h1>
        </div>

      </div>
    </div>
  );
}

export default BalanceCard;