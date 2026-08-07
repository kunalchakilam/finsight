import AccountCard from "./AccountCard";

function AccountGrid({
  accounts,
  onEdit,
}) {
  return (
    <div className="accounts-grid">

      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
          onClick={() => onEdit(account)}
        />
      ))}

    </div>
  );
}

export default AccountGrid;