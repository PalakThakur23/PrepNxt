import SearchBar from './SearchBar.jsx'

function Navbar({ onSearch, searchValue = '', userName = 'Learner' }) {
  return (
    <header className="app-navbar">
      <a className="app-navbar__brand" href="/" aria-label="PrepNxt home">
        <span className="app-navbar__logo" aria-hidden="true">P</span>
        <span>PrepNxt</span>
      </a>

      <SearchBar
        className="app-navbar__search"
        value={searchValue}
        onChange={onSearch}
        placeholder="Search your preparation"
      />

      <div className="app-navbar__user" aria-label={`Signed in as ${userName}`}>
        <span className="app-navbar__avatar" aria-hidden="true">
          {userName.trim().charAt(0).toUpperCase() || 'L'}
        </span>
        <span className="app-navbar__user-name">{userName}</span>
      </div>
    </header>
  )
}

export default Navbar
