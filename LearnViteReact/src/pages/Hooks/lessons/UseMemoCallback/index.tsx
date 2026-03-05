import { useState, useMemo, useCallback, memo } from "react";
import styles from "./UseMemoCallback.module.css";

const allItems = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: ["Electronics", "Books", "Clothing", "Food"][i % 4],
}));

const ChildButton = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button className={styles.btn} onClick={onClick}>
                {label}
            </button>
            <span className={`${styles.statBadge} ${styles.statBadgeRender}`}>
                memo'd child
            </span>
        </div>
    );
});

const UseMemoCallback = () => {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);
    const [unrelated, setUnrelated] = useState(0);

    const filteredItems = useMemo(() => {
        return allItems.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const handleIncrement = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>useMemo & useCallback</h2>
                <p className={styles.subtitle}>
                    Memoizing expensive computations and stabilizing function references.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    <code>useMemo</code> caches the result of an expensive computation so it only
                    re-runs when its dependencies change. <code>useCallback</code> caches a function
                    reference so it stays stable across renders — useful when passing callbacks to
                    memoized child components (<code>React.memo</code>).
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Most code doesn't need memoization — React
                    is fast enough. Use <code>useMemo</code> when you have genuinely expensive work
                    in render (filtering thousands of items, complex math). Use{" "}
                    <code>useCallback</code> when passing callbacks to <code>React.memo</code>{" "}
                    children — otherwise the child re-renders every time because the function
                    reference changes. Don't memoize everything by default.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>Two demos showing when memoization helps:</p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>
                            1. useMemo — filtering 200 items
                        </p>
                        <input
                            className={styles.searchInput}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search items..."
                        />
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                            Showing {filteredItems.length} of {allItems.length} items.{" "}
                            <span className={`${styles.statBadge} ${styles.statBadgeMemo}`}>
                                memoized
                            </span>
                        </p>
                        <div className={styles.itemList}>
                            {filteredItems.slice(0, 10).map((item) => (
                                <span key={item.id}>
                                    {item.name} — {item.category}
                                </span>
                            ))}
                            {filteredItems.length > 10 && (
                                <span style={{ color: "#9ca3af", fontStyle: "italic" }}>
                                    ...and {filteredItems.length - 10} more
                                </span>
                            )}
                        </div>
                        <button
                            className={styles.btn}
                            onClick={() => setUnrelated((n) => n + 1)}
                        >
                            Unrelated state update ({unrelated})
                        </button>
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                            Click "Unrelated state update" — the parent re-renders, but{" "}
                            <code>useMemo</code> skips re-filtering because <code>search</code>{" "}
                            hasn't changed.
                        </p>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>
                            2. useCallback — stable function for memo'd child
                        </p>
                        <p style={{ margin: 0, fontSize: "0.8rem" }}>
                            Counter: <strong>{count}</strong>
                        </p>
                        <ChildButton onClick={handleIncrement} label="Increment (useCallback)" />
                        <ChildButton onClick={handleReset} label="Reset (useCallback)" />
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                            The ChildButton is wrapped in <code>React.memo</code>. Because{" "}
                            <code>handleIncrement</code> and <code>handleReset</code> use{" "}
                            <code>useCallback</code>, the buttons don't re-render when unrelated
                            state changes — the function references stay stable.
                        </p>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// useMemo — cache expensive computation:
const filteredItems = useMemo(() => {
    return allItems.filter(item =>
        item.name.includes(search)
    );
}, [search]); // only re-runs when search changes

// useCallback — stable function reference:
const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
}, []); // never re-created

// React.memo — skip re-render if props are the same:
const ChildButton = memo(({ onClick, label }) => {
    return <button onClick={onClick}>{label}</button>;
});`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    <code>useMemo</code> returns a <strong>cached value</strong>,{" "}
                    <code>useCallback</code> returns a <strong>cached function</strong>. Both take a
                    dependency array — the cache invalidates when dependencies change. Don't use
                    them everywhere — they add memory overhead. Profile first, memoize only when
                    there's a measurable performance issue. <code>React.memo</code> on a child
                    component is what makes <code>useCallback</code> useful.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Build a sortable product list:
                    </p>
                    <ul>
                        <li>Create an array of 100 products with name, price, and rating</li>
                        <li>Add a "Sort by" dropdown (name, price, rating)</li>
                        <li>Use <code>useMemo</code> to memoize the sorted result — it should only re-sort when the sort field or data changes</li>
                        <li>Add an unrelated counter that updates state — verify the sort doesn't re-run</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default UseMemoCallback;
