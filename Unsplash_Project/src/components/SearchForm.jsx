const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = e.target.elements.search.value;
    if (!searchResult) return;
    console.log(searchResult);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
export default SearchForm;
