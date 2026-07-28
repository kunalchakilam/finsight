function CategoryCard({
  category,
  onClick,
}) {
  return (
    <div
      className="category-card"
      onClick={onClick}
    >
      <div
        className="category-emoji"
        style={{
          background:
            category.color,
        }}
      >
        {category.emoji}
      </div>

      <p>{category.name}</p>
    </div>
  );
}

export default CategoryCard;