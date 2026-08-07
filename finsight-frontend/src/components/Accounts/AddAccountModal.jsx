import { useState } from "react";

const icons = [
  { type: "Bank", icon: "🏦" },
  { type: "Cash", icon: "💵" },
  { type: "Wallet", icon: "👛" },
  { type: "Credit Card", icon: "💳" },
];

function AddAccountModal({
  account,
  onClose,
  onSave,
}) {
  const [name, setName] =
    useState(account?.name || "");

  const [type, setType] =
    useState(account?.type || "Cash");

  const [icon, setIcon] =
    useState(account?.icon || "💵");

  const [balance, setBalance] =
    useState(account?.balance ?? "");

  const [isDefault, setIsDefault] =
    useState(account?.isDefault || false);

  function handleType(value) {
    setType(value);

    const selected =
      icons.find(
        (item) => item.type === value
      );

    setIcon(selected.icon);
  }

  function handleSave() {
    if (!name.trim() || balance === "") {
      alert("Please fill all fields.");
      return;
    }

    onSave({
      ...account,
      name,
      type,
      icon,
      balance: Number(balance),
      isDefault,
    });
  }

  return (
    <div className="modal-overlay">
      <div className="account-modal">

        <div className="modal-header">
          <h2>
            {account ? "Edit Account" : "Add Account"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="form-group">
          <label>Account Name</label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Axis Bank"
          />
        </div>

        <div className="form-group">
          <label>Type</label>

          <select
            value={type}
            onChange={(e) =>
              handleType(e.target.value)
            }
          >
            <option>Cash</option>
            <option>Bank</option>
            <option>Wallet</option>
            <option>Credit Card</option>
          </select>
        </div>

        <div className="form-group">
          <label>Opening Balance</label>

          <input
            type="number"
            value={balance}
            onChange={(e) =>
              setBalance(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Icon</label>

          <div className="icon-picker">
            {icons.map((item) => (
              <button
                key={item.type}
                type="button"
                className={
                  icon === item.icon
                    ? "icon-btn selected"
                    : "icon-btn"
                }
                onClick={() => {
                  setIcon(item.icon);
                  setType(item.type);
                }}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={isDefault}
            onChange={(e) =>
              setIsDefault(e.target.checked)
            }
          />

          Default Account
        </label>

        <div className="form-actions">
          <button
            className="secondary-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="primary-btn"
            onClick={handleSave}
          >
            {account ? "Update" : "Save"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddAccountModal;