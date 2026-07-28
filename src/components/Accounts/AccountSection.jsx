import { useState } from "react";
import { Plus } from "lucide-react";

import AccountGrid from "./AccountGrid";
import AddAccountModal from "./AddAccountModal";

function AccountSection({
  accounts,
  onAddAccount,
  onUpdateAccount,
}) {
  const [showModal, setShowModal] = useState(false);

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
    <>
      <section className="accounts-section">

        <div className="accounts-header">

          <div>
            <h2>Accounts</h2>
            <p>Manage all your accounts</p>
          </div>

          <button
            className="add-account-btn"
            onClick={handleAdd}
          >
            <Plus size={18} />

            Add Account
          </button>

        </div>

        <AccountGrid
          accounts={accounts}
          onEdit={handleEdit}
        />

      </section>

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
    </>
  );
}

export default AccountSection;