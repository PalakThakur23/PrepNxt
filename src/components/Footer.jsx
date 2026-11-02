function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer className="app-footer">
      <span>© {year} PrepNxt</span>
      <span>Plan your preparation. Track your progress.</span>
    </footer>
  )
}

export default Footer
