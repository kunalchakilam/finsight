function TransactionFilters({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  dateFilter,
  setDateFilter,
  sortBy,
  setSortBy,
  categoryFilter,
  setCategoryFilter,
  accountFilter,
  setAccountFilter,
  categories,
  accounts,
  clearFilters,
filteredCount,
totalCount,
}) {
  const uniqueCategories = [
    ...new Map(categories.map((category) => [category.id, category])).values(),
  ];

  return (
    <div className="transaction-filters">
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="results-count">
  Showing <strong>{filteredCount}</strong> of{" "}
  <strong>{totalCount}</strong> transactions
</div>

      <div className="filter-row">
        <div className="type-filters">
          <button
            className={typeFilter === "All" ? "active" : ""}
            onClick={() => setTypeFilter("All")}
          >
            All
          </button>

          <button
            className={typeFilter === "Income" ? "active" : ""}
            onClick={() => setTypeFilter("Income")}
          >
            Income
          </button>

          <button
            className={typeFilter === "Expense" ? "active" : ""}
            onClick={() => setTypeFilter("Expense")}
          >
            Expense
          </button>
        </div>

        <div className="active-filters">

  {typeFilter !== "All" && (
    <span className="filter-chip">
      {typeFilter}
      <button onClick={() => setTypeFilter("All")}>×</button>
    </span>
  )}

  {dateFilter !== "All Time" && (
    <span className="filter-chip">
      {dateFilter}
      <button onClick={() => setDateFilter("All Time")}>×</button>
    </span>
  )}

  {sortBy !== "Newest" && (
    <span className="filter-chip">
      {sortBy}
      <button onClick={() => setSortBy("Newest")}>×</button>
    </span>
  )}

  {categoryFilter !== "All" && (
    <span className="filter-chip">
      {
        categories.find(
          c => c.id === Number(categoryFilter)
        )?.emoji
      }{" "}
      {
        categories.find(
          c => c.id === Number(categoryFilter)
        )?.name
      }

      <button
        onClick={() => setCategoryFilter("All")}
      >
        ×
      </button>
    </span>
  )}

  {accountFilter !== "All" && (
    <span className="filter-chip">
      {
        accounts.find(
          a => a.id === Number(accountFilter)
        )?.icon
      }{" "}
      {
        accounts.find(
          a => a.id === Number(accountFilter)
        )?.name
      }

      <button
        onClick={() => setAccountFilter("All")}
      >
        ×
      </button>
    </span>
  )}

  {(search ||
    typeFilter !== "All" ||
    dateFilter !== "All Time" ||
    sortBy !== "Newest" ||
    categoryFilter !== "All" ||
    accountFilter !== "All") && (
    <button
      className="clear-filters-btn"
      onClick={clearFilters}
    >
      Clear All
    </button>
  )}
</div>

        <div className="filter-selects">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option>All Time</option>
            <option>Today</option>
            <option>Yesterday</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
            <option value="Highest">Highest Amount</option>
            <option value="Lowest">Lowest Amount</option>
            <option value="A-Z">Title (A → Z)</option>
            <option value="Z-A">Title (Z → A)</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All Categories</option>

            {uniqueCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.emoji} {category.name}
              </option>
            ))}
          </select>

          <select
            value={accountFilter}
            onChange={(e) => setAccountFilter(e.target.value)}
          >
            <option value="All">All Accounts</option>

            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.icon} {account.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TransactionFilters;