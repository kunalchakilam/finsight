function AccountCard({
  account,
  onClick,
}) {
  return (
    <div
      className="account-chip"
      onClick={onClick}
    >
      <span className="account-chip-icon">
        {account.icon}
      </span>

      <span className="account-chip-name">
        {account.name}
      </span>

      <span className="account-chip-balance">
        ₹
        {account.balance.toLocaleString()}
      </span>
    </div>
  );
}

export default AccountCard;