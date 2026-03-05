import { useState, useRef, useEffect } from "react";
import styles from "./UseRef.module.css";

const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const clickCountRef = useRef(0);
    const [renderCount, setRenderCount] = useState(0);
    const [stopwatchTime, setStopwatchTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleRefClick = () => {
        clickCountRef.current += 1;
        alert(`Clicked ${clickCountRef.current} times (no re-render happened!)`);
    };

    const forceRender = () => {
        setRenderCount((prev) => prev + 1);
    };

    const startStopwatch = () => {
        if (isRunning) return;
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setStopwatchTime((prev) => prev + 10);
        }, 10);
    };

    const stopStopwatch = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        stopStopwatch();
        setStopwatchTime(0);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const formatTime = (ms: number) => {
        const seconds = Math.floor(ms / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);
        return `${seconds}.${centiseconds.toString().padStart(2, "0")}s`;
    };

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>useRef</h2>
                <p className={styles.subtitle}>
                    DOM access and persistent values without re-renders.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    <code>useRef</code> creates a mutable container that persists across
                    renders. Unlike state, changing a ref does <em>not</em> trigger a
                    re-render. It has two main uses: accessing DOM elements directly, and
                    storing values that need to persist but shouldn't cause re-renders (like
                    timer IDs or previous values).
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Sometimes you need to reach into the
                    DOM directly — focusing an input after a form error, scrolling to a
                    message, measuring an element's dimensions. And sometimes you need a
                    value that persists across renders but doesn't trigger re-renders —
                    like storing an interval ID for a stopwatch so you can clear it later.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>Three patterns — DOM access, silent counter, and stopwatch with ref-stored interval:</p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>1. DOM access — Focus input</p>
                        <input ref={inputRef} className={styles.refInput} placeholder="Click the button to focus me" />
                        <button className={styles.btn} onClick={focusInput}>Focus Input</button>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>2. Silent counter — No re-render</p>
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>
                            Render count (state): {renderCount}
                        </p>
                        <div className={styles.btnRow}>
                            <button className={styles.btn} onClick={handleRefClick}>
                                Click (ref — no re-render)
                            </button>
                            <button className={styles.btn} onClick={forceRender}>
                                Force re-render (state)
                            </button>
                        </div>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>3. Stopwatch — Ref stores interval ID</p>
                        <p style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>
                            {formatTime(stopwatchTime)}
                        </p>
                        <div className={styles.btnRow}>
                            <button className={styles.btn} onClick={startStopwatch}>Start</button>
                            <button className={styles.btn} onClick={stopStopwatch}>Stop</button>
                            <button className={styles.btn} onClick={resetStopwatch}>Reset</button>
                        </div>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// DOM access:
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} />
inputRef.current?.focus();

// Persistent value (no re-render):
const clickCountRef = useRef(0);
clickCountRef.current += 1; // no re-render!

// Store interval ID for cleanup:
const intervalRef = useRef<number | null>(null);
intervalRef.current = setInterval(...);
clearInterval(intervalRef.current);`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Use <code>useRef</code> for DOM access (input focus, scroll, measure) and
                    for values that persist but don't need to trigger re-renders (timer IDs,
                    previous values). If you need the UI to update when a value changes,
                    use <code>useState</code> instead. Refs are the "escape hatch" from
                    React's declarative model.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>TextInput</code> component with:
                    </p>
                    <ul>
                        <li>An input field with a "Focus" button that focuses it (useRef for DOM access)</li>
                        <li>A render counter that shows how many times the component re-rendered (useRef for persistent value)</li>
                        <li>A "Type something" input that uses state (to trigger re-renders)</li>
                        <li>Observe: the render counter increments when state changes, but not when the ref-based click counter increments</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default UseRef;
