import styles from "./ComponentsAndJsx.module.css";

const Greeting = ({ name }: { name: string }) => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <p>Hello, <strong>{name}</strong>!</p>
            <p>2 + 2 = {2 + 2}</p>
            <p>Current year: {currentYear}</p>
        </div>
    );
};

const ComponentsAndJsx = () => {
    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Components & JSX</h2>
                <p className={styles.subtitle}>
                    What components are, how JSX works, and embedding expressions.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    A <strong>component</strong> is a reusable piece of UI. In React, every
                    visual element is a component — a function that returns JSX. JSX looks
                    like HTML but it's actually JavaScript. You can embed any JS expression
                    inside curly braces <code>{"{}"}</code>.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Think of components like LEGO blocks.
                    A navbar is a component, a card is a component, a button is a component.
                    In an app like Twitter, the feed is a component, each tweet is a component,
                    the like button is a component. You compose small pieces into bigger UIs.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Below is a <code>Greeting</code> component that takes a <code>name</code> prop
                    and renders personalized JSX with embedded expressions:
                </p>
                <div className={styles.demoBox}>
                    <Greeting name="React Learner" />
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`const Greeting = ({ name }: { name: string }) => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <p>Hello, <strong>{name}</strong>!</p>
            <p>2 + 2 = {2 + 2}</p>
            <p>Current year: {currentYear}</p>
        </div>
    );
};

// Usage: <Greeting name="React Learner" />`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Components are just functions that return JSX. JSX expressions inside
                    curly braces can be any valid JavaScript — math, variables, function
                    calls, ternaries. Fragments (<code>&lt;&gt;...&lt;/&gt;</code>) let
                    you return multiple elements without an extra wrapper div.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>ProductCard</code> component that displays:
                    </p>
                    <ul>
                        <li>A product name (as a heading)</li>
                        <li>A price formatted with <code>toFixed(2)</code></li>
                        <li>An "In Stock" or "Out of Stock" badge using a boolean expression</li>
                        <li>Use JSX expressions — no if statements, just embed in the template</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ComponentsAndJsx;
