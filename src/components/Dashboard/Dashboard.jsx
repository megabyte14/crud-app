
import "./Dashboard.css";
const cases = [
  {
    id: "CR-24-0817",
    title: "Harbor District Break-in Series",
    category: "PROPERTY CRIME",
    officer: "M. Chen",
    priority: "CRITICAL",
    updated: "18 min ago",
  },
  {
    id: "CR-24-0809",
    title: "Northline Transit Incident",
    category: "MAJOR CRIMES",
    officer: "A. Okafor",
    priority: "HIGH",
    updated: "1 hr ago",
  },
  {
    id: "CR-24-0791",
    title: "Aster Financial Irregularities",
    category: "FINANCIAL CRIME",
    officer: "R. Silva",
    priority: "STANDARD",
    updated: "3 hrs ago",
  },
];

function Dashboard() {
  return (
    <div className="arc-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-symbol">
            <span />
            <span />
            <span />
          </div>

          <div className="brand-text">
            <strong>
              ARC<span> //</span>
            </strong>
            <small>RECORDS BUREAU</small>
          </div>
        </div>

        <nav className="navigation" aria-label="Main navigation">
          <span className="nav-heading">MAIN MENU</span>

          <a href="#overview" className="nav-item active">
            <span className="nav-marker" />
            Overview
          </a>

          <a href="#investigations" className="nav-item">
            Investigations
          </a>

          <a href="#persons" className="nav-item">
            Persons
          </a>

          <a href="#evidence" className="nav-item">
            Evidence
          </a>

          <a href="#archive" className="nav-item">
            Records archive
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="operator-avatar">NO</div>

          <div className="operator-info">
            <strong>Nadia Ortiz</strong>
            <span>Senior Investigator</span>
          </div>
        </div>
      </aside>

      <main className="main-panel" id="overview">
        <header className="topbar">
          <div className="breadcrumb">
            RECORDS BUREAU <span>/</span> OVERVIEW
          </div>

          <div className="system-status">
            <span />
            SYSTEM ONLINE
          </div>
        </header>

        <div className="dashboard-content">
          <section className="welcome">
            <div>
              <span className="eyebrow">INVESTIGATION DIVISION</span>

              <h1>
                Good evening, <span>Investigator.</span>
              </h1>

              <p>
                Here is the current status of your investigations.
              </p>
            </div>

            <span className="date-label">
              METRO DIVISION / 2049
            </span>
          </section>

          <section
            className="metrics"
            aria-label="Investigation statistics"
          >
            <article className="metric">
              <span>ACTIVE CASES</span>
              <strong>24</strong>
              <small>Open investigations</small>
            </article>

            <article className="metric">
              <span>PENDING REVIEWS</span>
              <strong>08</strong>
              <small>Awaiting review</small>
            </article>

            <article className="metric">
              <span>EVIDENCE ITEMS</span>
              <strong>146</strong>
              <small>Currently in custody</small>
            </article>
          </section>

          <section className="investigations" id="investigations">
            <div className="section-heading">
              <div>
                <span className="section-number">01</span>
                <h2>Priority investigations</h2>
              </div>

              <span className="section-count">03 RECORDS</span>
            </div>

            <div className="table-head">
              <span>CASE</span>
              <span>LEAD OFFICER</span>
              <span>PRIORITY</span>
              <span>LAST UPDATED</span>
            </div>

            <div className="case-list">
              {cases.map((item) => (
                <article className="case-row" key={item.id}>
                  <div className="case-name">
                    <span className="case-indicator" />

                    <div>
                      <small>
                        {item.id} <span>/</span> {item.category}
                      </small>

                      <strong>{item.title}</strong>
                    </div>
                  </div>

                  <span className="case-lead">
                    {item.officer}
                  </span>

                  <span
                    className={`priority priority-${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>

                  <span className="case-updated">
                    {item.updated}
                  </span>
                </article>
              ))}
            </div>

            <div className="table-footer">
              <span>SHOWING 3 OF 24 ACTIVE CASES</span>
              <span>ALL RECORDS CURRENT</span>
            </div>
          </section>

          <footer className="page-footer">
            <span>ARC RECORDS BUREAU</span>
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
