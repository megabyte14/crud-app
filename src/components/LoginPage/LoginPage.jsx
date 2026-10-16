import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [badgeId, setBadgeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login UI only — authentication is not connected yet.");
  }

  return (
    <main className="login-page">
      <div className="login-grid" />

      <header className="login-topbar">
        <div className="login-brand">
          <span className="login-brand-mark">A</span>
          <div>
            <h2>ARC<span>//</span></h2>
            <p>RECORDS BUREAU</p>
          </div>
        </div>

        <div className="login-system-status">
          <span className="login-status-dot" />
          SYSTEM ONLINE
          <span className="login-top-divider">|</span>
          SECURE ACCESS
        </div>
      </header>

      <section className="login-main">
        <div className="login-intro">
          <p className="login-eyebrow">
            <span>01</span> PERSONNEL AUTHENTICATION
          </p>

          <h1>
            EVERY CASE
            <br />
            BEGINS <span>HERE.</span>
          </h1>

          <p className="login-description">
            Authorized personnel only. Authenticate your identity
            to access investigation records and classified case files.
          </p>

          <div className="login-classification">
            <span>ACCESS LEVEL</span>
            <strong>RESTRICTED</strong>
          </div>
        </div>

        <div className="login-panel">
          <div className="login-panel-header">
            <div>
              <p>ARC / AUTH-01</p>
              <h2>System Access</h2>
            </div>
            <span className="login-panel-icon">⌑</span>
          </div>

          <div className="login-panel-line" />

          <form onSubmit={handleSubmit}>
            <label htmlFor="badgeId">PERSONNEL / BADGE ID</label>
            <input
              id="badgeId"
              type="text"
              placeholder="Enter your badge ID"
              value={badgeId}
              onChange={(e) => setBadgeId(e.target.value)}
              autoComplete="username"
              required
            />

            <label htmlFor="password">ACCESS PASSWORD</label>
            <div className="login-password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <button type="submit" className="login-submit">
              <span>AUTHENTICATE IDENTITY</span>
              <span>→</span>
            </button>
          </form>

          <div className="login-panel-footer">
            <span>ENCRYPTION: ENABLED</span>
            <span>ARC-SEC / 01</span>
          </div>
        </div>
      </section>

      <footer className="login-footer">
        <span>ARC// RECORDS BUREAU</span>
        <span>AUTHORIZED PERSONNEL ONLY</span>
        <Link to="/dashboard">DEMO ACCESS ↗</Link>
      </footer>
    </main>
  );
}

export default LoginPage;