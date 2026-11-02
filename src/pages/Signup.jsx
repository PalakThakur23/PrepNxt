function Signup() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.brandWrap}>
          <div style={styles.logo}>P</div>
          <span style={styles.brand}>PrepNxt</span>
        </div>

        <h1 style={styles.title}>Create your account</h1>
        <p style={styles.subtitle}>Start organizing your goals, tasks, and milestones.</p>

        <form style={styles.form}>
          <div style={styles.nameRow}>
            <label style={styles.label}>
              First name
              <input type="text" placeholder="John" style={styles.input} />
            </label>
            <label style={styles.label}>
              Last name
              <input type="text" placeholder="Doe" style={styles.input} />
            </label>
          </div>

          <label style={styles.label}>
            Email address
            <input type="email" placeholder="you@example.com" style={styles.input} />
          </label>

          <label style={styles.label}>
            Password
            <input type="password" placeholder="Create a password" style={styles.input} />
          </label>

          <label style={styles.label}>
            Confirm password
            <input type="password" placeholder="Re-enter password" style={styles.input} />
          </label>

          <button type="submit" style={styles.primaryButton}>Sign up</button>
        </form>

        <p style={styles.footerText}>
          Already have an account? <a href="#" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    background: 'linear-gradient(135deg, #f7f9ff 0%, #eaf2ff 100%)',
    padding: 26,
    fontFamily: 'Inter, sans-serif',
    color: '#122033',
  },
  card: {
    width: '100%',
    maxWidth: 520,
    background: '#fff',
    borderRadius: 26,
    padding: 30,
    boxShadow: '0 22px 60px rgba(19, 35, 58, 0.08)',
    border: '1px solid rgba(18, 32, 51, 0.06)',
  },
  brandWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 12,
    background: 'linear-gradient(135deg, #1a73e8 0%, #5ba5ff 100%)',
    display: 'grid',
    placeItems: 'center',
    color: '#fff',
    fontWeight: 800,
  },
  brand: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1a73e8',
  },
  title: {
    margin: '10px 0 8px',
    fontSize: 30,
    letterSpacing: '-0.05em',
  },
  subtitle: {
    margin: 0,
    color: '#5d7389',
    lineHeight: 1.6,
  },
  form: {
    display: 'grid',
    gap: 16,
    marginTop: 24,
  },
  nameRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 14,
  },
  label: {
    display: 'grid',
    gap: 8,
    fontWeight: 600,
    color: '#294767',
    fontSize: 14,
  },
  input: {
    width: '100%',
    borderRadius: 12,
    border: '1px solid #dfe9f8',
    padding: '12px 14px',
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
    background: '#f9fbff',
  },
  primaryButton: {
    marginTop: 10,
    border: 'none',
    background: 'linear-gradient(135deg, #1a73e8 0%, #4c94ff 100%)',
    color: '#fff',
    borderRadius: 12,
    padding: '14px 18px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(26,115,232,0.20)',
  },
  footerText: {
    margin: '22px 0 0',
    textAlign: 'center',
    color: '#5a7285',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
    fontWeight: 700,
  },
}

export default Signup
