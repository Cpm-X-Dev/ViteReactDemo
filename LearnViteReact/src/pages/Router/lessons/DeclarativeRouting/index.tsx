import { Link, useLocation } from "react-router";
import styles from "./DeclarativeRouting.module.css";

const DeclarativeRouting = () => {
    const location = useLocation();

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Declarative Routing</h2>
                <p className={styles.subtitle}>
                    How URLs map to components with BrowserRouter, Routes, and Route.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    React Router lets you declare "when the URL is <code>/about</code>,
                    render the <code>About</code> component." Instead of the server deciding
                    what page to show, the client-side router reads the URL and renders the
                    matching component — all without a page reload.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Every multi-page web app needs
                    routing. Gmail has <code>/inbox</code>, <code>/sent</code>, <code>/drafts</code>.
                    This very app you're using right now uses React Router — look at your
                    URL bar. It says <code>{location.pathname}</code> and React Router is
                    rendering this lesson because it matched the route.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Live Demo — This App's Routing</h3>
                <p>
                    Your current URL is:
                </p>
                <div className={styles.demoBox}>
                    <p className={styles.currentUrl}>{location.pathname}</p>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                        React Router matched this URL to the <code>DeclarativeRouting</code> component.
                        Try navigating to these routes:
                    </p>
                    <div className={styles.tryLinks}>
                        <Link to="/" className={styles.tryLink}>/ (Home)</Link>
                        <Link to="/essentials" className={styles.tryLink}>/essentials</Link>
                        <Link to="/hooks" className={styles.tryLink}>/hooks</Link>
                        <Link to="/forms" className={styles.tryLink}>/forms</Link>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// This app's actual routing (main.tsx):
import { BrowserRouter, Routes, Route } from "react-router";

<BrowserRouter>
    <Routes>
        <Route element={<App />}>       {/* Layout wrapper */}
            <Route index element={<Home />} />
            <Route path="essentials" element={<Essentials />}>
                <Route path="components-jsx" element={<ComponentsAndJsx />} />
                ...
            </Route>
            <Route path="hooks" element={<Hooks />}>
                <Route path="use-state" element={<UseState />} />
                ...
            </Route>
            <Route path="router" element={<RouterLayout />}>
                <Route path="declarative-routing" element={<DeclarativeRouting />} />
                ...
            </Route>
            <Route path="forms" element={<Forms />}>...</Route>
        </Route>
    </Routes>
</BrowserRouter>`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    <code>BrowserRouter</code> enables routing using the browser's history API.
                    <code> Routes</code> is the container that picks the best matching
                    <code> Route</code>. Each <code>Route</code> maps a <code>path</code> to
                    an <code>element</code>. The <code>index</code> route is the default when
                    no sub-path matches. Import from <code>"react-router"</code> (not
                    <code>"react-router-dom"</code>) in React Router v7.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Given this route configuration, predict which component renders for each URL:
                    </p>
                    <ul>
                        <li><code>/</code> — which component renders?</li>
                        <li><code>/essentials/lists-keys</code> — which component renders inside which layout?</li>
                        <li><code>/hooks</code> — what happens (hint: check the index route)?</li>
                        <li><code>/nonexistent</code> — what happens?</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default DeclarativeRouting;
