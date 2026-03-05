import { useLocation } from "react-router";
import styles from "./NestedRoutes.module.css";

const NestedRoutes = () => {
    const location = useLocation();

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Nested Routes & Layouts</h2>
                <p className={styles.subtitle}>
                    Parent layouts with Outlet, nested route trees, and index routes.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    Nested routes let parent components render shared UI (navigation, sidebar,
                    footer) while child routes swap in and out via <code>&lt;Outlet /&gt;</code>.
                    The parent "wraps" the child — the top nav stays persistent, only the
                    inner content changes.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Almost every app has persistent
                    navigation around changing content. Gmail's sidebar stays while inbox/sent/drafts
                    swap. This app does the same — the top nav bar stays while you navigate
                    between lessons. Nested routes make this natural instead of manually
                    including the nav in every page component.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Live Demo — You're In a Nested Route Right Now</h3>
                <p>
                    Current URL: <code>{location.pathname}</code>
                </p>
                <div className={styles.demoBox}>
                    <p style={{ margin: 0, fontSize: "0.78rem" }}>
                        Here's the component tree rendering this very page:
                    </p>
                    <div className={styles.diagram}>
                        <div>App (Navigation + <strong>Outlet</strong> + Footer)</div>
                        <div>&nbsp;&nbsp;└─ RouterLayout (SubNav + <strong>Outlet</strong>)</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ <span className={styles.highlight}>NestedRoutes (this lesson!)</span></div>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                        The top Navigation bar is rendered by <code>App</code>. The sub-nav
                        (Declarative Routing, Nested Routes, etc.) is rendered by <code>RouterLayout</code>.
                        This lesson content is rendered inside the second <code>&lt;Outlet /&gt;</code>.
                    </p>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// App.tsx — top-level layout:
const App = () => (
    <div className={styles.app}>
        <Navigation />  {/* Always visible */}
        <Outlet />      {/* Renders matched child route */}
        <Footer />      {/* Always visible */}
    </div>
);

// Router/index.tsx — category layout:
const RouterLayout = () => (
    <div>
        <h2>React Router</h2>
        <SubNav />      {/* Category-level navigation */}
        <Outlet />      {/* Renders matched lesson */}
    </div>
);

// Route tree in main.tsx:
<Route element={<App />}>
    <Route path="router" element={<RouterLayout />}>
        <Route path="nested-routes" element={<NestedRoutes />} />
    </Route>
</Route>`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    <code>&lt;Outlet /&gt;</code> is the placeholder where child routes
                    render. A parent route with only an <code>element</code> (no <code>path</code>)
                    acts as a pure layout wrapper. The <code>index</code> route is the
                    default child that renders when the parent's path matches exactly (like
                    <code>/essentials</code> redirecting to <code>/essentials/components-jsx</code>).
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        For the URL <code>/hooks/use-effect</code>, describe:
                    </p>
                    <ul>
                        <li>Which component is the outermost wrapper?</li>
                        <li>What does the first <code>&lt;Outlet /&gt;</code> render?</li>
                        <li>What does the second <code>&lt;Outlet /&gt;</code> render?</li>
                        <li>If you navigate to <code>/hooks</code>, what happens?</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default NestedRoutes;
