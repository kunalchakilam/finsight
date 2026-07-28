import CategoryCard from "./CategoryCard";

function CategoryGrid({
  categories,
  onCategorySelect,
  onAddCategory,
}) {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onClick={() =>
            onCategorySelect(category)
          }
        />
      ))}

      <div
        className="category-card add-category"
        onClick={onAddCategory}
      >
        <div className="category-emoji">
          ➕
        </div>

        <p>Add</p>
      </div>
    </div>
  );
}

export default CategoryGrid;