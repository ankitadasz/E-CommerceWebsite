export const FilterBar = ({
  activeFilter,
  input,
  setInput,
  products,
  showAllProduct,
  showTopRated,
  clearSearch,
  searchInput,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-toggle">
        <button
          onClick={showAllProduct}
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
        >
          All Products
        </button>
        <button
          onClick={showTopRated}
          className={`filter-btn ${activeFilter === "top" ? "active" : ""}`}
        >
          Top Rated
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search here..."
        />
        <button className="clear-btn" onClick={clearSearch}>
          ×
        </button>
        <button
          className="search-btn"
          onClick={() => {
            searchInput(input);
          }}
        >
          Search
        </button>
      </div>

      <p className="product-count">
        Showing <span>{products.length}</span> products
      </p>
    </div>
  );
};
