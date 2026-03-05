import { Link, NavLink, useNavigate } from "react-router";
import styles from "./NavigationAndLinks.module.css";

const NavigationAndLinks = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Navigation & Links</h2>
                <p className={styles.subtitle}>
                    Link, NavLink, and programmatic navigation with useNavigate.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    Never use <code>&lt;a href&gt;</code> for internal navigation — it causes
                    a full page reload, losing all React state. <code>&lt;Link&gt;</code> does
                    client-side navigation. <code>&lt;NavLink&gt;</code> is like Link but adds
                    an <code>isActive</code> callback for styling the current route. For
                    programmatic navigation (after form submit, on button click), use the
                    <code> useNavigate()</code> hook.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Look at the nav bar above this page.
                    Those are <code>NavLink</code> components. The currently active one
                    ("Router") has darker text because <code>isActive</code> is true.
                    Click any link — notice the page doesn't reload, the URL changes
                    instantly. That's client-side navigation.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Three ways to navigate — Link, NavLink, and useNavigate:
                </p>
                <div className={styles.demoBox}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, color: "#6b7280" }}>
                            1. Link — basic navigation:
                        </p>
                        <Link to="/" style={{ fontSize: "0.8rem" }}>
                            Go to Home (Link)
                        </Link>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, color: "#6b7280" }}>
                            2. NavLink — with active styling:
                        </p>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <NavLink
                                to="/router/navigation-links"
                                style={({ isActive }) => ({
                                    fontSize: "0.8rem",
                                    fontWeight: isActive ? 700 : 400,
                                    color: isActive ? "#1f2937" : "#6b7280",
                                })}
                            >
                                This Lesson (active)
                            </NavLink>
                            <NavLink
                                to="/router/declarative-routing"
                                style={({ isActive }) => ({
                                    fontSize: "0.8rem",
                                    fontWeight: isActive ? 700 : 400,
                                    color: isActive ? "#1f2937" : "#6b7280",
                                })}
                            >
                                Declarative Routing (inactive)
                            </NavLink>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, color: "#6b7280" }}>
                            3. useNavigate — programmatic:
                        </p>
                        <button className={styles.btn} onClick={() => navigate("/")}>
                            Go to Home (useNavigate)
                        </button>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// Link — basic client-side navigation:
<Link to="/about">About</Link>

// NavLink — auto-active styling:
<NavLink
    to="/router"
    className={({ isActive }) =>
        isActive ? styles.active : styles.link
    }
>
    Router
</NavLink>

// useNavigate — programmatic navigation:
const navigate = useNavigate();
<button onClick={() => navigate("/")}>Go Home</button>
navigate(-1); // go back
navigate("/login", { replace: true }); // replace history`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Use <code>Link</code> for simple navigation. Use <code>NavLink</code> when
                    you need active-state styling (navbars, sidebars, tabs). Use
                    <code> useNavigate()</code> for programmatic navigation (after form
                    submission, timeouts, or logic). Pass <code>replace: true</code> to replace
                    history instead of pushing (useful for redirects).
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a breadcrumb component:
                    </p>
                    <ul>
                        <li>Parse the current URL into segments (use <code>useLocation</code>)</li>
                        <li>Render each segment as a <code>NavLink</code></li>
                        <li>The current (last) segment should be bold, others should be links</li>
                        <li>Example: Home &gt; Router &gt; <strong>Navigation & Links</strong></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default NavigationAndLinks;
