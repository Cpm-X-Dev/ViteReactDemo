import { createContext, useContext, useState, useCallback } from "react";
import styles from "./UseContext.module.css";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
    theme: "light",
    toggle: () => {},
});

const GrandChild = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "light"
                    ? `${styles.themedPanel} ${styles.themedPanelLight}`
                    : `${styles.themedPanel} ${styles.themedPanelDark}`
            }
        >
            <p style={{ margin: 0, fontSize: "0.78rem" }}>
                I'm the <strong>GrandChild</strong>. I read the theme directly from context:{" "}
                <code>"{theme}"</code>
            </p>
            <p style={{ margin: "0.25rem 0 0", fontSize: "0.7rem", opacity: 0.7 }}>
                No props were passed through Parent or Child to get here.
            </p>
        </div>
    );
};

const Child = () => {
    return (
        <div style={{ paddingLeft: "0.75rem", borderLeft: "2px solid #e5e7eb" }}>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                Child — passes nothing down
            </p>
            <GrandChild />
        </div>
    );
};

const Parent = () => {
    return (
        <div style={{ paddingLeft: "0.75rem", borderLeft: "2px solid #e5e7eb" }}>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                Parent — passes nothing down
            </p>
            <Child />
        </div>
    );
};

const UseContextLesson = () => {
    const [theme, setTheme] = useState<Theme>("light");
    const toggle = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>useContext</h2>
                <p className={styles.subtitle}>
                    Sharing state across components without prop drilling.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    The Context API solves <strong>prop drilling</strong> — when you need to pass
                    data through many levels of components that don't use it themselves.{" "}
                    <code>createContext</code> creates the context, a <code>Provider</code> wraps the
                    tree, and <code>useContext</code> reads the value from anywhere inside.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Imagine passing a user's auth token from App →
                    Layout → Sidebar → UserMenu → Avatar. Every middle component takes a prop it
                    never uses. Context lets Avatar read the token directly. Real apps use context
                    for themes, auth, locale, feature flags, and toast notifications.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    The toggle below changes the theme in context. The GrandChild reads it directly
                    — no props pass through Parent or Child:
                </p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>Component Tree with ThemeContext</p>
                        <button className={styles.btn} onClick={toggle}>
                            Toggle theme (current: {theme})
                        </button>
                        <ThemeContext.Provider value={{ theme, toggle }}>
                            <Parent />
                        </ThemeContext.Provider>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>How the tree looks:</p>
                        <div className={styles.componentTree}>
                            <span>
                                {"<"}ThemeContext.Provider{">"}
                            </span>
                            <span style={{ paddingLeft: "1rem" }}>
                                {"<"}Parent{">"}  — <em>no theme prop</em>
                            </span>
                            <span style={{ paddingLeft: "2rem" }}>
                                {"<"}Child{">"}  — <em>no theme prop</em>
                            </span>
                            <span style={{ paddingLeft: "3rem" }} className={styles.highlight}>
                                {"<"}GrandChild{">"}  — reads theme via useContext()
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// 1. Create the context:
const ThemeContext = createContext({ theme: "light", toggle: () => {} });

// 2. Provide it at the top of the tree:
const App = () => {
    const [theme, setTheme] = useState("light");
    const toggle = () => setTheme(t => t === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            <Parent />
        </ThemeContext.Provider>
    );
};

// 3. Consume it anywhere below (no props needed):
const GrandChild = () => {
    const { theme } = useContext(ThemeContext);
    return <div className={theme}>I know the theme!</div>;
};`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Context is not a replacement for all props — use it for truly global values
                    (theme, auth, locale). Overusing context can make components harder to reuse
                    and test. Each <code>Provider</code> can be nested, and <code>useContext</code>{" "}
                    reads from the nearest parent provider. When the context value changes, all
                    consumers re-render.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>LanguageContext</code> for i18n:
                    </p>
                    <ul>
                        <li>Create a context with a <code>language</code> ("en" | "es" | "ja") and a <code>setLanguage</code> function</li>
                        <li>Wrap a component tree with the provider</li>
                        <li>Add a language switcher dropdown that updates the context</li>
                        <li>Have a deeply nested component display a greeting in the selected language</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default UseContextLesson;
