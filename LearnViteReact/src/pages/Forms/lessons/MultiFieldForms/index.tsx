import { useState } from "react";
import styles from "./MultiFieldForms.module.css";

type FormData = {
    username: string;
    email: string;
    password: string;
    role: string;
};

const initialFormData: FormData = {
    username: "",
    email: "",
    password: "",
    role: "developer",
};

const MultiFieldForms = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [submissions, setSubmissions] = useState<FormData[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissions([...submissions, formData]);
        setFormData(initialFormData);
    };

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Multi-Field Forms</h2>
                <p className={styles.subtitle}>
                    Managing multiple fields with a single state object and shared handler.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    Real forms have many fields. Instead of creating a separate
                    <code> useState</code> for each, use a single state object. A shared
                    <code> handleChange</code> reads <code>e.target.name</code> to know
                    which field changed and uses a computed property name to update it.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Registration forms, settings pages,
                    checkout flows — they all have 5-20 fields. Using individual
                    <code> useState</code> for each means 20 state variables and 20 handlers.
                    The single-object pattern with <code>[e.target.name]</code> scales to
                    any number of fields without extra code. This is the standard approach
                    in production React apps.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>A registration form with a shared handleChange. Submit to see the log:</p>
                <div className={styles.demoBox}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.fieldRow}>
                            <label className={styles.fieldLabel}>Username:</label>
                            <input
                                className={styles.fieldInput}
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                            />
                        </div>
                        <div className={styles.fieldRow}>
                            <label className={styles.fieldLabel}>Email:</label>
                            <input
                                className={styles.fieldInput}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                            />
                        </div>
                        <div className={styles.fieldRow}>
                            <label className={styles.fieldLabel}>Password:</label>
                            <input
                                className={styles.fieldInput}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                            />
                        </div>
                        <div className={styles.fieldRow}>
                            <label className={styles.fieldLabel}>Role:</label>
                            <select
                                className={styles.fieldSelect}
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <div className={styles.btnRow}>
                            <button type="submit" className={styles.submitBtn}>Register</button>
                            <button
                                type="button"
                                className={styles.btn}
                                onClick={() => setFormData(initialFormData)}
                            >
                                Reset
                            </button>
                        </div>
                    </form>

                    <div className={styles.stateDisplay}>
                        Current state: {JSON.stringify(formData)}
                    </div>

                    {submissions.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                            <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 700, color: "#6b7280" }}>
                                Submissions:
                            </p>
                            {submissions.map((sub, i) => (
                                <div key={i} className={styles.logEntry}>
                                    {sub.username} | {sub.email} | {sub.role}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`type FormData = {
    username: string;
    email: string;
    password: string;
    role: string;
};

const [formData, setFormData] = useState<FormData>({
    username: "", email: "", password: "", role: "developer"
});

// One handler for ALL fields:
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    //          ^ spread old   ^ computed property
};

// Every input uses the same handler:
<input name="username" value={formData.username} onChange={handleChange} />
<input name="email"    value={formData.email}    onChange={handleChange} />

// Submit and reset:
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData); // reset
};`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    The <code>[name]: value</code> computed property pattern is the key. Every
                    input must have a <code>name</code> attribute that matches a key in the
                    state object. Spread to update immutably. Reset by setting state back to
                    the initial object. Always call <code>e.preventDefault()</code> in the
                    submit handler to prevent a full page reload.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>ShippingForm</code> with:
                    </p>
                    <ul>
                        <li>Fields: name, address, city, state, zip — all in one state object</li>
                        <li>A shared <code>handleChange</code> using <code>[e.target.name]</code></li>
                        <li>Display the formatted address below the form as you type</li>
                        <li>A "Clear" button that resets all fields</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default MultiFieldForms;
