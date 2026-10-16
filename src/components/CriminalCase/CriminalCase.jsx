import { Link } from "react-router-dom";
import "./CriminalCase.css";
const caseData = {
    id: "CASE-2029-0841",
    title: "The Stratford Incident",
    classification: "HOMICIDE",
    status: "ACTIVE INVESTIGATION",
    priority: "HIGH",
    opened: "14.08.2029",
    location: "Stratford District, Detroit",
    officer: "CONNOR RK800",
    victim: "Carlos Ortiz",
    suspect: "Daniel Ortiz",
    suspectId: "SUB-00841",
    age: 34,
    occupation: "Warehouse Supervisor",
    description:
        "A fatal incident was reported at a private residence in Stratford District. Initial examination indicates signs of a physical altercation. Investigators are reviewing forensic evidence and witness statements to establish the sequence of events.",
};

const evidence = [
    {
        id: "EV-001",
        name: "Forensic blood sample",
        type: "BIOLOGICAL",
        status: "ANALYZED",
    },
    {
        id: "EV-002",
        name: "Damaged kitchen knife",
        type: "WEAPON",
        status: "IN REVIEW",
    },
    {
        id: "EV-003",
        name: "Residential security footage",
        type: "DIGITAL",
        status: "PENDING",
    },
];

const timeline = [
    {
        time: "21:14",
        title: "Incident reported",
        detail: "Emergency dispatch received a report from the residence.",
    },
    {
        time: "21:32",
        title: "Investigation initiated",
        detail: "Officer Connor RK800 arrived at the scene.",
    },
    {
        time: "22:06",
        title: "Evidence secured",
        detail: "Initial forensic materials were collected and catalogued.",
    },
    {
        time: "08:40",
        title: "Suspect identified",
        detail: "A person of interest was added to the investigation record.",
    },
];

function SectionHeading({ number, children, extra }) {
    return (
        <div className="cc-section-heading">
            <div>
                <span className="cc-section-number">{number}</span>
                <h2>{children}</h2>
            </div>
            {extra && <span className="cc-section-extra">{extra}</span>}
        </div>
    );
}

function CriminalCase() {
    return (
        <main className="cc-page">
            <header className="cc-topbar">
                <div className="cc-breadcrumb">
                    <span>ARC//</span>
                    <span className="cc-slash">/</span>
                    RECORDS
                    <span className="cc-slash">/</span>
                    <strong>CASE FILE</strong>
                </div>

                <div className="cc-system-status">
                    <span className="cc-status-dot" />
                    SECURE DATABASE
                    <span className="cc-topbar-divider" />
                    ACCESS LEVEL 04
                </div>
            </header>

            <div className="cc-content">
                <div className="cc-back-row">
                    <Link to="/dashboard" className="cc-back-arrow">
                        ←
                    </Link>
                    <span>INVESTIGATION RECORDS</span>
                    <span className="cc-back-divider">/</span>
                    <span>{caseData.id}</span>
                </div>

                <section className="cc-case-header">
                    <div className="cc-case-title">
                        <div className="cc-eyebrow">
                            <span className="cc-live-dot" />
                            CENTRAL INVESTIGATION DIVISION
                            <span>/// 01</span>
                        </div>

                        <h1>{caseData.title}</h1>

                        <p>
                            CASE REFERENCE <strong>{caseData.id}</strong>
                        </p>
                    </div>

                    <div className="cc-case-status">
                        <span className="cc-status-label">CURRENT STATUS</span>
                        <span className="cc-status-value">
                            <span className="cc-status-dot" />
                            {caseData.status}
                        </span>
                        <span className="cc-priority">
                            <span className="cc-priority-mark" />
                            PRIORITY: {caseData.priority}
                        </span>
                    </div>
                </section>

                <div className="cc-header-rule" />

                <div className="cc-main-grid">
                    <div className="cc-primary-column">
                        <section className="cc-panel cc-suspect-panel">
                            <SectionHeading number="01">
                                PERSON OF INTEREST
                            </SectionHeading>

                            <div className="cc-suspect-layout">
                                <div className="cc-suspect-portrait">
                                    <div className="cc-portrait-corner cc-corner-tl" />
                                    <div className="cc-portrait-corner cc-corner-tr" />
                                    <div className="cc-portrait-corner cc-corner-bl" />
                                    <div className="cc-portrait-corner cc-corner-br" />

                                    <div className="cc-portrait-scan" />
                                    <div className="cc-portrait-placeholder">
                                        <svg
                                            viewBox="0 0 120 150"
                                            role="img"
                                            aria-label="Generic suspect silhouette"
                                        >
                                            <circle cx="60" cy="43" r="25" />
                                            <path d="M17 135 C19 91 36 76 60 76 C84 76 101 91 103 135 Z" />
                                        </svg>
                                    </div>

                                    <span className="cc-portrait-label">
                                        BIOMETRIC RECORD
                                    </span>
                                    <span className="cc-portrait-index">FIG. 01</span>
                                </div>

                                <div className="cc-suspect-info">
                                    <div className="cc-suspect-id">
                                        SUBJECT IDENTIFIER
                                        <strong>{caseData.suspectId}</strong>
                                    </div>

                                    <h3>{caseData.suspect}</h3>
                                    <span className="cc-subject-tag">
                                        PERSON OF INTEREST
                                    </span>

                                    <div className="cc-info-grid">
                                        <div>
                                            <span>AGE</span>
                                            <strong>{caseData.age} YEARS</strong>
                                        </div>
                                        <div>
                                            <span>OCCUPATION</span>
                                            <strong>{caseData.occupation}</strong>
                                        </div>
                                        <div>
                                            <span>CASE ROLE</span>
                                            <strong>PRIMARY SUSPECT</strong>
                                        </div>
                                        <div>
                                            <span>RECORD STATUS</span>
                                            <strong>UNDER REVIEW</strong>
                                        </div>
                                    </div>

                                    <div className="cc-caution">
                                        <span>!</span>
                                        <p>
                                            Allegation under investigation. No finding of guilt
                                            has been established.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="cc-panel">
                            <SectionHeading number="02" extra="INCIDENT REPORT">
                                CASE OVERVIEW
                            </SectionHeading>

                            <p className="cc-description">
                                {caseData.description}
                            </p>

                            <div className="cc-incident-grid">
                                <div>
                                    <span>INCIDENT CLASSIFICATION</span>
                                    <strong>{caseData.classification}</strong>
                                </div>
                                <div>
                                    <span>DATE OPENED</span>
                                    <strong>{caseData.opened}</strong>
                                </div>
                                <div>
                                    <span>INCIDENT LOCATION</span>
                                    <strong>{caseData.location}</strong>
                                </div>
                                <div>
                                    <span>LEAD INVESTIGATOR</span>
                                    <strong>{caseData.officer}</strong>
                                </div>
                                <div>
                                    <span>VICTIM</span>
                                    <strong>{caseData.victim}</strong>
                                </div>
                                <div>
                                    <span>ASSIGNED DIVISION</span>
                                    <strong>MAJOR CRIMES UNIT</strong>
                                </div>
                            </div>
                        </section>

                        <section className="cc-panel">
                            <SectionHeading number="03" extra="CHAIN OF CUSTODY">
                                EVIDENCE REGISTER
                            </SectionHeading>

                            <div className="cc-table-wrap">
                                <table className="cc-evidence-table">
                                    <thead>
                                        <tr>
                                            <th>REFERENCE</th>
                                            <th>ITEM DESCRIPTION</th>
                                            <th>CLASSIFICATION</th>
                                            <th>STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {evidence.map((item) => (
                                            <tr key={item.id}>
                                                <td className="cc-evidence-id">{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>
                                                    <span
                                                        className={`cc-evidence-status ${item.status === "ANALYZED"
                                                            ? "is-complete"
                                                            : item.status === "PENDING"
                                                                ? "is-pending"
                                                                : "is-review"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="cc-table-footer">
                                <span>RECORDS FOUND: {evidence.length}</span>
                                <span>ALL TIMES AND RECORDS ARE SIMULATED</span>
                            </div>
                        </section>
                    </div>

                    <aside className="cc-secondary-column">
                        <section className="cc-panel cc-quick-panel">
                            <SectionHeading number="04">CASE METRICS</SectionHeading>

                            <div className="cc-metric">
                                <span>EVIDENCE ITEMS</span>
                                <strong>03</strong>
                                <div className="cc-metric-line">
                                    <span style={{ width: "66%" }} />
                                </div>
                                <small>2 OF 3 ITEMS REVIEWED OR ANALYZED</small>
                            </div>

                            <div className="cc-metric">
                                <span>INVESTIGATION PROGRESS</span>
                                <strong>64<small>%</small></strong>
                                <div className="cc-metric-line">
                                    <span style={{ width: "64%" }} />
                                </div>
                                <small>PRELIMINARY ESTIMATE</small>
                            </div>

                            <div className="cc-metric cc-metric-last">
                                <span>ASSIGNED OFFICER</span>
                                <strong className="cc-officer-name">
                                    CONNOR <span>RK800</span>
                                </strong>
                                <small>MAJOR CRIMES UNIT</small>
                            </div>
                        </section>

                        <section className="cc-panel">
                            <SectionHeading number="05" extra="LOCAL TIME">
                                CASE TIMELINE
                            </SectionHeading>

                            <div className="cc-timeline">
                                {timeline.map((event, index) => (
                                    <div className="cc-timeline-item" key={event.time}>
                                        <div className="cc-timeline-marker">
                                            {index === 0 ? "01" : `0${index + 1}`}
                                        </div>
                                        <div className="cc-timeline-content">
                                            <span className="cc-timeline-time">
                                                {event.time} HRS
                                            </span>
                                            <h3>{event.title}</h3>
                                            <p>{event.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="cc-notice">
                            <span className="cc-notice-symbol">///</span>
                            <div>
                                <strong>RESTRICTED RECORD</strong>
                                <p>
                                    This fictional case file is for demonstration purposes.
                                    Access and records are not connected to a real law
                                    enforcement database.
                                </p>
                            </div>
                        </section>
                    </aside>
                </div>

                <footer className="cc-footer">
                    <span>ARC// RECORDS BUREAU</span>
                    <span>END OF FILE — {caseData.id}</span>
                    <span>AUTHORIZED ACCESS ONLY</span>
                </footer>
            </div>
        </main >
    );
}

export default CriminalCase;
