import { useState } from "react";
import styles from "./FormValidation.module.css";

type FieldErrors = {
    email: string;
    password: string;
};

const initialErrors: FieldErrors = { email: "", password: "" };

const FormValidation = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FieldErrors>(initialErrors);
    const [success, setSuccess] = useState(false);

    const validate = (): FieldErrors => {
        const newErrors: FieldErrors = { email: "", password: "" };

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!email.includes("@")) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(false);

        const newErrors = validate();
        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        setErrors(initialErrors);
        setSuccess(true);
    };

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Form Validation</h2>
                <p className={styles.subtitle}>
                    Client-side validation with error messages and success state.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    Client-side validation gives instant feedback before submitting to a
                    server. The pattern: validate all fields in one pass, collect errors
                    into an object, and conditionally display error messages below each
                    field. If any errors exist, prevent submission.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Never trust client-side validation
                    alone — always validate server-side too. But client-side validation
                    gives instant feedback. Users hate submitting a form only to get a page
                    reload with errors at the top. Good UX shows errors inline, right below
                    the problematic field, as soon as they try to submit. Gmail does this —
                    it shows "Enter a valid email" instantly.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    Try submitting with empty fields, invalid email, or short password:
                </p>
                <div className={styles.demoBox}>
                    {success && (
                        <div className={styles.successBox}>
                            Login successful! (In a real app, you'd redirect here.)
                        </div>
                    )}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.fieldRow}>
                            <label className={styles.fieldLabel}>Email:</label>
                            <input
                                className={`${styles.fieldInput} ${errors.email ? styles.fieldInputError : ""}`}
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="user@example.com"
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>
                        <div className={styles.fieldRow}>
                            <label className={styles.fieldLabel}>Password:</label>
                            <input
                                className={`${styles.fieldInput} ${errors.password ? styles.fieldInputError : ""}`}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="At least 6 characters"
                            />
                            {errors.password && <p className={styles.errorText}>{errors.password}</p>}
                        </div>
                        <button type="submit" className={styles.submitBtn}>Login</button>
                    </form>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`type FieldErrors = { email: string; password: string };

const validate = (): FieldErrors => {
    const errors: FieldErrors = { email: "", password: "" };

    if (!email.trim()) {
        errors.email = "Email is required.";
    } else if (!email.includes("@")) {
        errors.email = "Please enter a valid email.";
    }

    if (password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
    }

    return errors;
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (newErrors.email || newErrors.password) {
        setErrors(newErrors);
        return; // Don't submit
    }
    setErrors({ email: "", password: "" });
    setSuccess(true);
};

// Conditional error display:
{errors.email && <p className={styles.errorText}>{errors.email}</p>}`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Validate all fields in one pass — don't stop at the first error. Use an
                    error state object with keys matching each field. Check if any error
                    exists before submitting. Clear errors on success. Consider adding
                    <code> onBlur</code> validation for even faster feedback (validate as
                    the user leaves each field).
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create a <code>PasswordStrength</code> component:
                    </p>
                    <ul>
                        <li>A password input that validates in real-time (as you type)</li>
                        <li>Show strength: "Weak" (under 6 chars), "Medium" (6-9 chars), "Strong" (10+ with number)</li>
                        <li>Color-code the indicator: red, yellow, green</li>
                        <li>Show checkmarks for: minimum length, contains number, contains uppercase</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default FormValidation;
