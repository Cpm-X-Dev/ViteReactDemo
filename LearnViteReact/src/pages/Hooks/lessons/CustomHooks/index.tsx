import { useState, useEffect, useCallback } from "react";
import styles from "./CustomHooks.module.css";

function useToggle(initial: boolean = false): [boolean, () => void] {
    const [value, setValue] = useState(initial);
    const toggle = useCallback(() => setValue((prev) => !prev), []);
    return [value, toggle];
}

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [stored, setStored] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        setStored(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [stored, setValue];
}

function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((json: T) => {
                if (!cancelled) setData(json);
            })
            .catch((err: Error) => {
                if (!cancelled) setError(err.message);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
    }, [url]);

    return { data, loading, error };
}

type Post = { id: number; title: string };

const CustomHooks = () => {
    const [isOpen, toggleOpen] = useToggle(false);
    const [name, setName] = useLocalStorage("learn-react-name", "");
    const { data: posts, loading, error } = useFetch<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Custom Hooks</h2>
                <p className={styles.subtitle}>
                    Extracting reusable logic into your own hooks.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    Custom hooks let you extract and share stateful logic between components.
                    They're just functions that call other hooks, prefixed with <code>use</code>.
                    They don't share state between components — each component using the hook
                    gets its own independent copy.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> When you find yourself copy-pasting
                    the same useState + useEffect pattern across components, that's a signal
                    to extract a custom hook. Real teams build hooks like <code>useAuth()</code>,
                    <code>useFetch()</code>, <code>useLocalStorage()</code>,
                    <code>useDebounce()</code>. Libraries like React Query, SWR, and React
                    Hook Form are all built on custom hooks.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>Three custom hooks in action:</p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>1. useToggle — Boolean with toggle()</p>
                        <p style={{ margin: 0, fontSize: "0.8rem" }}>
                            Panel is: <strong>{isOpen ? "Open" : "Closed"}</strong>
                        </p>
                        <button className={styles.btn} onClick={toggleOpen}>Toggle</button>
                        {isOpen && (
                            <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280", padding: "0.5rem", border: "1px solid #e5e7eb", borderRadius: "4px" }}>
                                This content is visible because isOpen is true.
                            </p>
                        )}
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>2. useLocalStorage — Persists across refreshes</p>
                        <input
                            className={styles.hookInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Type your name..."
                        />
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                            Stored in localStorage as "learn-react-name". Refresh the page — it persists!
                        </p>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>3. useFetch — Generic data fetching</p>
                        {loading && <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>Loading posts...</p>}
                        {error && <p style={{ margin: 0, fontSize: "0.8rem", color: "#dc2626" }}>Error: {error}</p>}
                        {posts && (
                            <ul style={{ margin: 0, padding: "0 0 0 1rem", fontSize: "0.78rem" }}>
                                {posts.map((post) => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// useToggle — simple boolean hook:
function useToggle(initial = false) {
    const [value, setValue] = useState(initial);
    const toggle = useCallback(() => setValue(prev => !prev), []);
    return [value, toggle];
}

// useLocalStorage — persists to localStorage:
function useLocalStorage<T>(key: string, initial: T) {
    const [stored, setStored] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initial;
    });
    const setValue = (value: T) => {
        setStored(value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    return [stored, setValue];
}

// useFetch — generic data fetching:
function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url).then(r => r.json()).then(setData)
            .finally(() => setLoading(false));
    }, [url]);
    return { data, loading };
}`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Custom hooks must start with <code>use</code> — this tells React to
                    apply hook rules. They can call any other hooks. Each component that
                    uses a custom hook gets its own independent state. Think of custom hooks
                    as "recipes" for stateful logic, not shared singletons.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>useDebounce</code> hook:
                    </p>
                    <ul>
                        <li>Accepts a <code>value</code> and a <code>delay</code> in ms</li>
                        <li>Returns the debounced value (only updates after the delay)</li>
                        <li>Uses <code>useEffect</code> with a <code>setTimeout</code> and cleanup</li>
                        <li>Use it in a search input — show "Searching..." immediately, then display the debounced query</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default CustomHooks;
