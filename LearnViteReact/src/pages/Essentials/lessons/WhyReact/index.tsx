import { useState, useRef, useEffect } from "react";
import styles from "./WhyReact.module.css";

const WhyReact = () => {
    const [reactCount, setReactCount] = useState(0);
    const vanillaRef = useRef<HTMLSpanElement>(null);
    const vanillaCount = useRef(0);

    const handleVanillaClick = () => {
        vanillaCount.current += 1;
        if (vanillaRef.current) {
            vanillaRef.current.textContent = String(vanillaCount.current);
        }
    };

    useEffect(() => {
        if (vanillaRef.current) {
            vanillaRef.current.textContent = "0";
        }
    }, []);

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Why React?</h2>
                <p className={styles.subtitle}>
                    What makes React the most popular UI library and when to use it.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    React is a JavaScript library for building user interfaces using a{" "}
                    <strong>component-based</strong> architecture. Instead of manipulating the DOM
                    directly (imperative), you describe <em>what</em> the UI should look like for a
                    given state (declarative), and React figures out how to update the DOM
                    efficiently using a virtual DOM diffing algorithm.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> React isn't the only choice — Vue, Angular,
                    Svelte, and SolidJS are all solid alternatives. But React has the largest
                    ecosystem (npm packages, tutorials, Stack Overflow answers), the most job
                    listings, and is used by Meta, Netflix, Airbnb, Discord, and Twitter.
                    Understanding <em>why</em> you chose a tool matters as much as knowing how to
                    use it.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    The same counter built two ways — vanilla JavaScript (imperative) vs React
                    (declarative):
                </p>
                <div className={styles.demoBox}>
                    <div className={styles.comparisonSplit}>
                        <div className={`${styles.comparisonPanel} ${styles.comparisonPanelVanilla}`}>
                            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.78rem" }}>
                                Vanilla JS (imperative)
                            </p>
                            <p style={{ margin: 0, fontSize: "0.8rem" }}>
                                Count: <span ref={vanillaRef}>0</span>
                            </p>
                            <button className={styles.btn} onClick={handleVanillaClick}>
                                + Increment
                            </button>
                            <p style={{ margin: 0, fontSize: "0.65rem", color: "#92400e" }}>
                                You must manually find the DOM element and update its text content.
                            </p>
                        </div>
                        <div className={`${styles.comparisonPanel} ${styles.comparisonPanelReact}`}>
                            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.78rem" }}>
                                React (declarative)
                            </p>
                            <p style={{ margin: 0, fontSize: "0.8rem" }}>
                                Count: {reactCount}
                            </p>
                            <button className={styles.btn} onClick={() => setReactCount((c) => c + 1)}>
                                + Increment
                            </button>
                            <p style={{ margin: 0, fontSize: "0.65rem", color: "#1e40af" }}>
                                You just update state. React updates the DOM for you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// Vanilla JS — imperative DOM manipulation:
const button = document.getElementById("btn");
const display = document.getElementById("count");
let count = 0;
button.addEventListener("click", () => {
    count++;
    display.textContent = count; // YOU update the DOM
});

// React — declarative state:
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>  {/* React updates the DOM */}
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
};`}</code></pre>
                </div>

                <div className={styles.demoBox}>
                    <p className={styles.demoLabel}>React's Core Strengths</p>
                    <div className={styles.strengthList}>
                        <div className={styles.strengthItem}>
                            <span className={styles.strengthBullet}>+</span>
                            <span><strong>Component model</strong> — Build UIs from reusable, self-contained pieces</span>
                        </div>
                        <div className={styles.strengthItem}>
                            <span className={styles.strengthBullet}>+</span>
                            <span><strong>Declarative</strong> — Describe what the UI should look like, not how to change it</span>
                        </div>
                        <div className={styles.strengthItem}>
                            <span className={styles.strengthBullet}>+</span>
                            <span><strong>Virtual DOM</strong> — Efficient updates by diffing and batching DOM changes</span>
                        </div>
                        <div className={styles.strengthItem}>
                            <span className={styles.strengthBullet}>+</span>
                            <span><strong>Ecosystem</strong> — Largest library ecosystem (React Router, Redux, React Query, etc.)</span>
                        </div>
                        <div className={styles.strengthItem}>
                            <span className={styles.strengthBullet}>+</span>
                            <span><strong>Job market</strong> — Most in-demand frontend skill globally</span>
                        </div>
                        <div className={styles.strengthItem}>
                            <span className={styles.strengthBullet}>+</span>
                            <span><strong>Cross-platform</strong> — React Native for mobile, Electron for desktop</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    React shines for interactive, stateful UIs with many components. Its
                    declarative model makes complex UIs easier to reason about and maintain.
                    The component model encourages reuse and composition. However, React adds
                    bundle size and complexity — for a simple static page, plain HTML/CSS is
                    often better. Choose React when you need interactivity, reusable components,
                    and a rich ecosystem.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Think critically about when React is and isn't the right choice:
                    </p>
                    <ul>
                        <li>List 3 types of projects where React is a great fit (and explain why)</li>
                        <li>List 3 types of projects where React is overkill and plain HTML/CSS/JS would be better</li>
                        <li>Compare React with one alternative (Vue, Angular, or Svelte) — what are the trade-offs?</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default WhyReact;
