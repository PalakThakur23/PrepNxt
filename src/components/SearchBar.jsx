function SearchBar({
  value = '',
  onChange,
  onSubmit,
  placeholder = 'Search...',
  className = '',
}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form className={`search-bar ${className}`.trim()} role="search" onSubmit={handleSubmit}>
      <label className="search-bar__label" htmlFor="app-search">
        Search
      </label>
      <input
        id="app-search"
        className="search-bar__input"
        type="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
      />
      <button className="search-bar__button" type="submit" aria-label="Submit search">
        Search
      </button>
    </form>
  )
}

export default SearchBar
