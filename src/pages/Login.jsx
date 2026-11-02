function Login() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.brandWrap}>
          <div style={styles.logo}>P</div>
          <span style={styles.brand}>PrepNxt</span>
        </div>

        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.subtitle}>Sign in to continue your preparation journey.</p>

        <form style={styles.form}>
          <label style={styles.label}>
            Email address
            <input type="email" placeholder="you@example.com" style={styles.input} />
          </label>

          <label style={styles.label}>
            Password
            <input type="password" placeholder="Enter your password" style={styles.input} />
          </label>

          <div style={styles.row}>
            <label style={styles.rememberRow}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" style={styles.link}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.primaryButton}>Login</button>
        </form>

        <p style={styles.footerText}>
          Don&apos;t have an account? <a href="#" style={styles.link}>Create one</a>
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
    background: 'linear-gradient(135deg, #f4f8ff 0%, #edf4ff 100%)',
    padding: 24,
    fontFamily: 'Inter, sans-serif',
    color: '#122033',
  },
  card: {
    width: '100%',
    maxWidth: 440,
    background: '#fff',
    borderRadius: 24,
    padding: 32,
    boxShadow: '0 20px 55px rgba(18, 32, 51, 0.08)',
    border: '1px solid rgba(18, 32, 51, 0.06)',
  },
  brandWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
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
    margin: '10px 0 10px',
    fontSize: 34,
    letterSpacing: '-0.05em',
  },
  subtitle: {
    margin: 0,
    color: '#5b7289',
    lineHeight: 1.6,
  },
  form: {
    display: 'grid',
    gap: 18,
    marginTop: 28,
  },
  label: {
    display: 'grid',
    gap: 8,
    fontWeight: 600,
    color: '#25415d',
    fontSize: 14,
  },
  input: {
    width: '100%',
    borderRadius: 12,
    border: '1px solid #dce7f7',
    padding: '12px 14px',
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
    background: '#f9fbff',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    color: '#4f6478',
    fontSize: 14,
  },
  rememberRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
    fontWeight: 600,
  },
  primaryButton: {
    marginTop: 8,
    border: 'none',
    background: 'linear-gradient(135deg, #1a73e8 0%, #4d97ff 100%)',
    color: '#fff',
    fontWeight: 700,
    borderRadius: 12,
    padding: '14px 18px',
    cursor: 'pointer',
    boxShadow: '0 14px 30px rgba(26,115,232,0.20)',
  },
  footerText: {
    margin: '22px 0 0',
    textAlign: 'center',
    color: '#5c7288',
  },
}

export default Login
