import "./LoginPage.css";

function LoginPage() {
  return (
    <main className="login-page">
      <header className="login-header">
        <div className="login-brand">
          <div className="login-brand-symbol">
            <span />
            <span />
            <span />
          </div>

          <div className="login-brand-text">
            <strong>ARC<span>//</span></strong>
            <small>RECORDS BUREAU</small>
          </div>
        </div>

        <span className="login-header-label">
          PERSONNEL ACCESS
        </span>
      </header>

      <section className="login-main">
        <div className="login-heading">
          <span className="login-section-label">
            ACCOUNT AUTHENTICATION
          </span>
          <h1>Login in</h1>
          <p>Enter your credentials to access the system.</p>
        </div>

        <form className="login-form">
          <div className="login-field">
            <label htmlFor="badgeId">BADGE ID</label>
            <input
              id="badgeId"
              type="text"
              placeholder="Enter badge ID"
              autoComplete="username"
              required
              autoFocus
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">PASSWORD</label>

            <div className="login-password">
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit">
            <span>Login in</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <div className="login-bottom-note">
          <span className="login-note-marker" />
          Authorized personnel only
        </div>
      </section>

      <footer className="login-footer">
        <span>ARC// RECORDS BUREAU</span>
        <span>ACCESS CONTROL</span>
      </footer>
    </main>
  );
}

export default LoginPage;
