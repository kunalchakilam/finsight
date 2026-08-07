import { useState } from "react";

const emojis = [
  "🍔",
  "🛍️",
  "✈️",
  "🎬",
  "💡",
  "❤️",
  "☕",
  "⛽",
  "🏠",
  "🚕",
  "🎁",
  "📈",
  "💰",
  "🎓",
  "🐶",
  "⚽",
];

const colors = [
  "#FFE8B5",
  "#FDE2E4",
  "#D6EAF8",
  "#E8DAEF",
  "#FCF3CF",
  "#FADBD8",
  "#D5F5D5",
  "#F6DDCC",
];

function AddCategoryModal({
  type,
  onClose,
  onSave,
}) {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("🍔");
  const [color, setColor] = useState("#FFE8B5");

  function handleSave() {
    if (!name.trim()) {
      alert("Enter category name");
      return;
    }

    onSave({
      name,
      emoji,
      color,
      type,
    });
  }

  return (
    <div className="modal-overlay">
      <div className="add-category-modal">

        <div className="modal-header">
          <h2>Add Category</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="form-group">

          <label>Name</label>

          <input
            type="text"
            placeholder="Shopping"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

        <label>Select Emoji</label>

        <div className="emoji-grid">
          {emojis.map((item) => (
            <button
              key={item}
              type="button"
              className={
                emoji === item
                  ? "emoji-btn selected"
                  : "emoji-btn"
              }
              onClick={() =>
                setEmoji(item)
              }
            >
              {item}
            </button>
          ))}
        </div>

        <label>Select Color</label>

        <div className="color-grid">
          {colors.map((item) => (
            <div
              key={item}
              className={
                color === item
                  ? "color-circle active"
                  : "color-circle"
              }
              style={{
                background: item,
              }}
              onClick={() =>
                setColor(item)
              }
            />
          ))}
        </div>

        <div className="preview-card">

          <div
            className="category-emoji"
            style={{
              background: color,
            }}
          >
            {emoji}
          </div>

          <p>{name || "Category"}</p>

        </div>

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
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddCategoryModal;