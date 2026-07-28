import {
  Landmark,
  Wallet,
  CreditCard,
} from "lucide-react";

function AccountCard({
  account,
  onClick,
}) {

  function getIcon() {

    switch (account.type) {

      case "Bank":
        return <Landmark size={22} />;

      case "Wallet":
        return <Wallet size={22} />;

      case "Credit Card":
        return <CreditCard size={22} />;

      default:
        return <span>{account.icon}</span>;
    }

  }

  return (
    <div
      className="account-card"
      onClick={onClick}
    >

      <div className="account-card-top">

        <div className="account-icon">
          {getIcon()}
        </div>

        {account.isDefault && (
          <span className="default-badge">
            Default
          </span>
        )}

      </div>

      <div className="account-info">

        <h3>{account.name}</h3>

        <p>{account.type}</p>

      </div>

      <div className="account-balance">

        ₹{account.balance.toLocaleString()}

      </div>

    </div>
  );
}

export default AccountCard;