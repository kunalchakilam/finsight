import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import AddCategoryModal from "./AddCategoryModal";

function CategoryPickerModal({
  categories,
  onClose,
  onCategorySelect,
  onAddCategory,
}) {
  const [activeType, setActiveType] =
    useState("Expense");

  const [showAddModal, setShowAddModal] =
    useState(false);

  const filteredCategories = categories.filter(
    (category) => category.type === activeType
  );

  return (
    <>
      <div className="modal-overlay">
        <div className="category-modal">

          <div className="modal-header">
            <h2>Select Category</h2>

            <button
              className="close-btn"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          <div className="type-tabs">

            <button
              className={
                activeType === "Expense"
                  ? "tab active"
                  : "tab"
              }
              onClick={() =>
                setActiveType("Expense")
              }
            >
              Expense
            </button>

            <button
              className={
                activeType === "Income"
                  ? "tab active"
                  : "tab"
              }
              onClick={() =>
                setActiveType("Income")
              }
            >
              Income
            </button>

            <button
              className={
                activeType === "Transfer"
                  ? "tab active"
                  : "tab"
              }
              onClick={() =>
                setActiveType("Transfer")
              }
            >
              Transfer
            </button>

          </div>

          {activeType === "Transfer" ? (
            <div className="transfer-box">

              <button
                className="primary-btn"
                onClick={() =>
                  onCategorySelect(
                    null,
                    "Transfer"
                  )
                }
              >
                Continue Transfer
              </button>

            </div>
          ) : (
            <CategoryGrid
              categories={filteredCategories}
              onCategorySelect={(category) =>
                onCategorySelect(
                  category,
                  activeType
                )
              }
              onAddCategory={() =>
                setShowAddModal(true)
              }
            />
          )}

        </div>
      </div>

      {showAddModal && (
        <AddCategoryModal
          type={activeType}
          onClose={() =>
            setShowAddModal(false)
          }
          onSave={(category) => {
            onAddCategory(category);
            setShowAddModal(false);
          }}
        />
      )}
    </>
  );
}

export default CategoryPickerModal;