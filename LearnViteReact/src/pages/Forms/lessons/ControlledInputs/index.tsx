import { useState } from "react";
import styles from "./ControlledInputs.module.css";

const ControlledInputs = () => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("red");
    const [agreed, setAgreed] = useState(false);
    const [bio, setBio] = useState("");

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Controlled Inputs</h2>
                <p className={styles.subtitle}>
                    React-owned form values with value + onChange.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    A <strong>controlled input</strong> is one where React owns the value.
                    You set <code>value=&#123;state&#125;</code> and update it via
                    <code> onChange</code>. This gives you instant access to the value for
                    validation, formatting, or conditional logic. The alternative
                    (uncontrolled) lets the DOM own the value — but then React can't track it.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Every login form, search bar,
                    and settings page uses controlled inputs. Google's search bar? Controlled.
                    Slack's message box? Controlled. When you need to validate as the user
                    types, format a phone number, or disable a submit button until fields
                    are valid — you need React to own the input value.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>Four input types, all controlled — watch the state update in real time:</p>
                <div className={styles.demoBox}>
                    <div className={styles.fieldRow}>
                        <label className={styles.fieldLabel}>Text input:</label>
                        <input
                            className={styles.fieldInput}
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type something..."
                        />
                    </div>

                    <div className={styles.fieldRow}>
                        <label className={styles.fieldLabel}>Select dropdown:</label>
                        <select
                            className={styles.fieldSelect}
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                        </select>
                    </div>

                    <div className={styles.checkboxRow}>
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            id="agree-check"
                        />
                        <label htmlFor="agree-check">I agree to the terms</label>
                    </div>

                    <div className={styles.fieldRow}>
                        <label className={styles.fieldLabel}>Textarea:</label>
                        <textarea
                            className={styles.fieldTextarea}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Write your bio..."
                        />
                    </div>

                    <div className={styles.stateDisplay}>
                        {JSON.stringify({ text, color, agreed, bio }, null, 2)}
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// Text input:
const [text, setText] = useState("");
<input value={text} onChange={(e) => setText(e.target.value)} />

// Select:
const [color, setColor] = useState("red");
<select value={color} onChange={(e) => setColor(e.target.value)}>
    <option value="red">Red</option>
</select>

// Checkbox (uses checked, not value):
const [agreed, setAgreed] = useState(false);
<input type="checkbox"
    checked={agreed}
    onChange={(e) => setAgreed(e.target.checked)}
/>

// Textarea:
const [bio, setBio] = useState("");
<textarea value={bio} onChange={(e) => setBio(e.target.value)} />`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Always pair <code>value</code> with <code>onChange</code> — otherwise the
                    input becomes read-only. Checkboxes use <code>checked</code> instead of
                    <code>value</code>, and <code>e.target.checked</code> instead of
                    <code>e.target.value</code>. If an input has <code>value</code> but no
                    <code>onChange</code>, React will show a console warning.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>TemperatureConverter</code>:
                    </p>
                    <ul>
                        <li>Two controlled inputs: Celsius and Fahrenheit</li>
                        <li>When Celsius changes, auto-calculate Fahrenheit: <code>F = C * 9/5 + 32</code></li>
                        <li>When Fahrenheit changes, auto-calculate Celsius: <code>C = (F - 32) * 5/9</code></li>
                        <li>Both inputs stay in sync — editing one updates the other</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ControlledInputs;
