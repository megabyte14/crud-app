
import "./SignupPage.css";

function SignupPage() {
    return (
        <main className="signup-page">
            <header className="signup-header">
                <div className="signup-brand">
                    <div className="signup-brand-symbol">
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="signup-brand-text">
                        <strong>ARC<span>//</span></strong>
                        <small>RECORDS BUREAU</small>
                    </div>
                </div>

                <span className="signup-header-label">
                    PERSONNEL REGISTRATION
                </span>
            </header>

            <section className="signup-main">
                <div className="signup-heading">
                    <span className="signup-section-label">
                        NEW PERSONNEL
                    </span>
                    <h1>Create account</h1>
                    <p>Register your personnel credentials.</p>
                </div>

                <form className="signup-form">
                    <div className="signup-field">
                        <label htmlFor="badgeId">BADGE ID</label>
                        <input
                            id="badgeId"
                            type="text"
                            placeholder="Enter badge ID"
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label htmlFor="fullName">FULL NAME</label>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Enter full name"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Create password"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <div className="signup-field">
                        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Re-enter password"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button type="submit" className="signup-submit">
                        <span>Create account</span>
                        <span aria-hidden="true">→</span>
                    </button>
                </form>

                <div className="signup-bottom-note">
                    <span className="signup-note-marker" />
                    Authorized personnel only
                </div>
            </section>

            <footer className="signup-footer">
                <span>ARC// RECORDS BUREAU</span>
                <span>ACCESS CONTROL</span>
            </footer>
        </main>
    );
}

export default SignupPage;
