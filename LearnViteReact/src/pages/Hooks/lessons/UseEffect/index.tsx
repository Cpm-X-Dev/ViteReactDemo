import { useState, useEffect } from "react";
import styles from "./UseEffect.module.css";

type User = {
    id: number;
    name: string;
    email: string;
    company: { name: string };
};

const UseEffect = () => {
    const [title, setTitle] = useState("Learn React");
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data: User) => {
                setUser(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>useEffect</h2>
                <p className={styles.subtitle}>
                    Side effects — syncing with the outside world.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    <code>useEffect</code> runs code <em>after</em> the component renders.
                    It's for side effects: things that happen outside React's rendering —
                    API calls, timers, event listeners, DOM manipulation, or updating the
                    document title.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Side effects are things that happen
                    "outside" your component. Fetching user data from an API when a profile
                    page loads, starting a timer for a countdown, listening for keyboard
                    shortcuts, updating the browser tab title. Without useEffect, you'd have
                    no way to sync your component with the outside world.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>Three useEffect patterns — dependency-driven, cleanup, and data fetching:</p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>1. Document title (dependency array)</p>
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                            Type below and check your browser tab title:
                        </p>
                        <input
                            className={styles.titleInput}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Page title..."
                        />
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>2. Live clock (cleanup function)</p>
                        <p style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{clock}</p>
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                            This interval is cleaned up when the component unmounts.
                        </p>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>3. Data fetching (empty deps [])</p>
                        {loading ? (
                            <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>Loading...</p>
                        ) : user ? (
                            <div className={styles.userData}>
                                <p><strong>{user.name}</strong></p>
                                <p>{user.email}</p>
                                <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>{user.company.name}</p>
                            </div>
                        ) : (
                            <p style={{ margin: 0, color: "#dc2626" }}>Failed to load user.</p>
                        )}
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// 1. Runs when 'title' changes:
useEffect(() => {
    document.title = title;
}, [title]);

// 2. Runs once on mount, cleanup on unmount:
useEffect(() => {
    const interval = setInterval(() => {
        setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval); // cleanup!
}, []);

// 3. Fetch data on mount:
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => setUser(data));
}, []);`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    The dependency array controls <em>when</em> the effect runs:
                    <code> []</code> = once on mount, <code>[value]</code> = when value
                    changes, no array = every render (rarely wanted). Always clean up
                    timers, event listeners, and subscriptions to prevent memory leaks.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>WindowSize</code> component that:
                    </p>
                    <ul>
                        <li>Uses <code>useEffect</code> to add a <code>resize</code> event listener</li>
                        <li>Stores the current <code>window.innerWidth</code> and <code>window.innerHeight</code> in state</li>
                        <li>Displays the dimensions as "1024 x 768"</li>
                        <li>Returns a cleanup function that removes the event listener</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default UseEffect;
