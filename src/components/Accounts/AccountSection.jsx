import { useState } from "react";
import AccountGrid from "./AccountGrid";
import AddAccountModal from "./AddAccountModal";

function AccountSection({
  accounts,
  onAddAccount,
  onUpdateAccount,
}) {
  const [showModal, setShowModal] =
    useState(false);

  const [selectedAccount, setSelectedAccount] =
    useState(null);

  function handleAdd() {
    setSelectedAccount(null);
    setShowModal(true);
  }

  function handleEdit(account) {
    setSelectedAccount(account);
    setShowModal(true);
  }

  return (
    <div className="card">
      <div className="section-header">
        <h2>Accounts</h2>
      </div>

      <AccountGrid
        accounts={accounts}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />

      {showModal && (
        <AddAccountModal
          account={selectedAccount}
          onClose={() => setShowModal(false)}
          onSave={(account) => {
            if (selectedAccount) {
              onUpdateAccount(account);
            } else {
              onAddAccount(account);
            }

            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default AccountSection;