function SearchBar() {
  return (
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search for a GitHub user..."
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
