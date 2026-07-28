import AccountCard from "./AccountCard";

function AccountGrid({
  accounts,
  onAdd,
  onEdit,
}) {
  return (
    <div className="account-row">
      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
          onClick={() => onEdit(account)}
        />
      ))}

      <div
        className="account-chip add-account-chip"
        onClick={onAdd}
      >
        <span className="account-chip-icon">
          ➕
        </span>

        <span className="account-chip-name">
          Add Account
        </span>
      </div>
    </div>
  );
}

export default AccountGrid;