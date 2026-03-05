import { useState } from "react";
import styles from "./UseState.module.css";

type UserProfile = {
    name: string;
    email: string;
};

const UseState = () => {
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(false);
    const [profile, setProfile] = useState<UserProfile>({ name: "Jane", email: "jane@example.com" });

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>useState</h2>
                <p className={styles.subtitle}>
                    Managing state — numbers, booleans, and objects.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    <code>useState</code> is the most fundamental React hook. It lets your
                    component "remember" values between renders. When you call the setter
                    function, React re-renders the component with the new value.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Every interactive element needs state.
                    A shopping cart's item count, a form's input values, a modal's open/closed
                    status, a dark mode toggle. Without state, your UI is just static HTML.
                    State is what makes React apps feel alive.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>Three examples of useState with different data types:</p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>1. Number state — Counter</p>
                        <p style={{ margin: 0, fontSize: "0.85rem" }}>Count: <strong>{count}</strong></p>
                        <div className={styles.btnRow}>
                            <button className={styles.btn} onClick={() => setCount(count - 1)}>-1</button>
                            <button className={styles.btn} onClick={() => setCount(count + 1)}>+1</button>
                            <button className={styles.btn} onClick={() => setCount(0)}>Reset</button>
                        </div>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>2. Boolean state — Theme Toggle</p>
                        <p style={{
                            margin: 0,
                            fontSize: "0.85rem",
                            backgroundColor: isDark ? "#1f2937" : "#fff",
                            color: isDark ? "#e5e7eb" : "#1f2937",
                            padding: "0.5rem",
                            borderRadius: "4px",
                            border: "1px solid #e5e7eb",
                        }}>
                            Current theme: {isDark ? "Dark" : "Light"}
                        </p>
                        <button className={styles.btn} onClick={() => setIsDark(!isDark)}>
                            Toggle Theme
                        </button>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>3. Object state — Profile Editor</p>
                        <div className={styles.profileField}>
                            <label>Name:</label>
                            <input
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            />
                        </div>
                        <div className={styles.profileField}>
                            <label>Email:</label>
                            <input
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                            State: {JSON.stringify(profile)}
                        </p>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// Number state:
const [count, setCount] = useState(0);
setCount(count + 1);       // direct
setCount(prev => prev + 1); // functional (safer)

// Boolean state:
const [isDark, setIsDark] = useState(false);
setIsDark(!isDark);

// Object state (immutable update):
const [profile, setProfile] = useState({ name: "", email: "" });
setProfile({ ...profile, name: "New name" });
// ^ spread old object, override one field`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Never mutate state directly — always use the setter. For objects and
                    arrays, spread to create a new copy. Use functional updates
                    (<code>prev =&gt; prev + 1</code>) when the new state depends on the
                    previous state, especially in async code or rapid updates.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>ShoppingCart</code> component:
                    </p>
                    <ul>
                        <li>State: an array of items with <code>id</code>, <code>name</code>, <code>price</code>, and <code>quantity</code></li>
                        <li>Add buttons to increment/decrement quantity (minimum 1)</li>
                        <li>A remove button to delete items (immutable with <code>.filter()</code>)</li>
                        <li>Display the total price calculated from all items</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default UseState;
