import { useState } from "react";
import styles from "./SsrAndCsr.module.css";

type Mode = "csr" | "ssr";

const SsrAndCsr = () => {
    const [mode, setMode] = useState<Mode>("csr");

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>SSR & CSR</h2>
                <p className={styles.subtitle}>
                    Server-Side Rendering vs Client-Side Rendering — how they work and when to
                    use each.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    <strong>CSR (Client-Side Rendering)</strong> sends a minimal HTML shell to the
                    browser, then JavaScript downloads, executes, and builds the entire UI on the
                    client. <strong>SSR (Server-Side Rendering)</strong> generates the full HTML on
                    the server and sends it to the browser — the page is visible immediately, then
                    JavaScript "hydrates" it to make it interactive.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> A marketing landing page needs SEO and fast
                    initial paint → SSR (Next.js, Remix). A dashboard behind a login screen doesn't
                    need SEO → CSR (Vite + React) is simpler and cheaper to host. This very app is
                    CSR — it's a learning tool, not indexed by Google. Most production apps use a
                    hybrid: SSR for public pages, CSR for authenticated app sections.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Toggle between CSR and SSR to see the rendering timeline for each approach:
                </p>
                <div className={styles.demoBox}>
                    <div className={styles.toggleGroup}>
                        <button
                            className={`${styles.toggleBtn} ${mode === "csr" ? styles.toggleBtnActive : ""}`}
                            onClick={() => setMode("csr")}
                        >
                            CSR
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${mode === "ssr" ? styles.toggleBtnActive : ""}`}
                            onClick={() => setMode("ssr")}
                        >
                            SSR
                        </button>
                    </div>

                    {mode === "csr" ? (
                        <div>
                            <p style={{ margin: "0 0 0.5rem", fontSize: "0.78rem", fontWeight: 700, color: "#92400e" }}>
                                CSR Timeline
                            </p>
                            <div className={styles.timeline}>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotBlank}`} />
                                    1. Browser receives empty HTML shell ({`<div id="root"></div>`})
                                </div>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotLoading}`} />
                                    2. Browser downloads JavaScript bundle (can be large)
                                </div>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotLoading}`} />
                                    3. JavaScript executes, React builds the virtual DOM
                                </div>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotReady}`} />
                                    4. UI appears and is immediately interactive
                                </div>
                            </div>
                            <p style={{ margin: "0.5rem 0 0", fontSize: "0.7rem", color: "#92400e" }}>
                                User sees a blank page until JS finishes loading. Search engines
                                may not index the content.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p style={{ margin: "0 0 0.5rem", fontSize: "0.78rem", fontWeight: 700, color: "#1e40af" }}>
                                SSR Timeline
                            </p>
                            <div className={styles.timeline}>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotHtml}`} />
                                    1. Server runs React, generates full HTML
                                </div>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotReady}`} />
                                    2. Browser receives complete HTML — page is visible immediately
                                </div>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotLoading}`} />
                                    3. JavaScript downloads in the background
                                </div>
                                <div className={styles.timelineStep}>
                                    <span className={`${styles.timelineDot} ${styles.timelineDotReady}`} />
                                    4. React "hydrates" — attaches event handlers, page becomes interactive
                                </div>
                            </div>
                            <p style={{ margin: "0.5rem 0 0", fontSize: "0.7rem", color: "#1e40af" }}>
                                User sees content immediately. Search engines can index the HTML.
                                But the page isn't interactive until hydration completes.
                            </p>
                        </div>
                    )}

                    <div className={styles.comparisonGrid}>
                        <div className={`${styles.comparisonCard} ${styles.comparisonCardCsr}`}>
                            <p className={styles.comparisonLabel}>CSR Strengths</p>
                            <p className={styles.comparisonDetail}>Simpler hosting (static files)</p>
                            <p className={styles.comparisonDetail}>No server required</p>
                            <p className={styles.comparisonDetail}>Fast after initial load</p>
                            <p className={styles.comparisonDetail}>Great for SPAs behind auth</p>
                        </div>
                        <div className={`${styles.comparisonCard} ${styles.comparisonCardSsr}`}>
                            <p className={styles.comparisonLabel}>SSR Strengths</p>
                            <p className={styles.comparisonDetail}>Better SEO (full HTML)</p>
                            <p className={styles.comparisonDetail}>Faster first paint</p>
                            <p className={styles.comparisonDetail}>Works without JavaScript</p>
                            <p className={styles.comparisonDetail}>Better for content sites</p>
                        </div>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// CSR — This app uses Vite + React (CSR):
// index.html has an empty <div id="root"></div>
// main.tsx renders everything client-side:
createRoot(document.getElementById("root")!).render(<App />);

// SSR — Next.js example:
// The server pre-renders the component to HTML:
export default function Page({ data }) {
    return <div>{data.title}</div>;
}

// getServerSideProps runs on the server before rendering:
export async function getServerSideProps() {
    const data = await fetch("https://api.example.com/data");
    return { props: { data: await data.json() } };
}`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    CSR and SSR aren't mutually exclusive — modern frameworks like Next.js support
                    both. Use SSR when you need SEO, fast first paint, or content-heavy pages. Use
                    CSR when the app is behind authentication, when you want simpler hosting, or
                    when the app is highly interactive. "Hydration" is the process of making
                    server-rendered HTML interactive by attaching React event handlers.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        For each app type below, decide CSR or SSR (and explain why):
                    </p>
                    <ul>
                        <li>A public blog with thousands of articles that need Google indexing</li>
                        <li>An admin dashboard for internal team use only</li>
                        <li>An e-commerce product catalog with public-facing pages</li>
                        <li>A real-time chat application behind a login wall</li>
                        <li>A company marketing site with landing pages</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default SsrAndCsr;
