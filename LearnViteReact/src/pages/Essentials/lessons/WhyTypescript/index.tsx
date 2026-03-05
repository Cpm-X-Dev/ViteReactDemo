import { useState } from "react";
import styles from "./WhyTypescript.module.css";

type UserRole = "admin" | "editor" | "viewer";

interface DemoUser {
    name: string;
    role: UserRole;
}

const users: DemoUser[] = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "editor" },
    { name: "Carol", role: "viewer" },
];

const roleLabels: Record<UserRole, string> = {
    admin: "Administrator",
    editor: "Content Editor",
    viewer: "Read-Only Viewer",
};

const WhyTypescript = () => {
    const [selectedRole, setSelectedRole] = useState<UserRole>("admin");

    const filtered = users.filter((u) => u.role === selectedRole);

    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Why TypeScript & TSX?</h2>
                <p className={styles.subtitle}>
                    Type safety, better tooling, and catching bugs before they reach users.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    TypeScript is a typed superset of JavaScript. It adds static types that are
                    checked at compile time — before your code runs. <strong>TSX</strong> is
                    TypeScript + JSX, giving you type-checked React components. Bugs that would
                    crash at runtime in JavaScript are caught immediately in your editor with
                    TypeScript.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> In a team of 5+ engineers, TypeScript pays
                    for itself in the first week. Autocompletion shows you exactly what props a
                    component accepts. Rename-refactor works across every file. A typo in a prop
                    name becomes a red squiggly, not a production bug. Companies like Airbnb, Slack,
                    and Stripe have publicly stated that TypeScript significantly reduced their
                    bug count.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    This demo itself is written in TSX. The role filter below uses a typed union —
                    only valid roles can be selected:
                </p>
                <div className={styles.demoBox}>
                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>Typed role filter (UserRole = "admin" | "editor" | "viewer")</p>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            {(["admin", "editor", "viewer"] as UserRole[]).map((role) => (
                                <button
                                    key={role}
                                    className={styles.benefitCard}
                                    style={{
                                        cursor: "pointer",
                                        fontWeight: selectedRole === role ? 700 : 400,
                                        opacity: selectedRole === role ? 1 : 0.6,
                                    }}
                                    onClick={() => setSelectedRole(role)}
                                >
                                    {roleLabels[role]}
                                </button>
                            ))}
                        </div>
                        <p style={{ margin: 0, fontSize: "0.75rem" }}>
                            Users with role "<code>{selectedRole}</code>":{" "}
                            {filtered.map((u) => u.name).join(", ") || "None"}
                        </p>
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "#9ca3af" }}>
                            TypeScript ensures <code>setSelectedRole</code> only accepts valid{" "}
                            <code>UserRole</code> values. Passing <code>"superadmin"</code> would be
                            a compile-time error.
                        </p>
                    </div>

                    <div className={styles.demoSection}>
                        <p className={styles.demoLabel}>JSX vs TSX — spot the bug</p>
                        <div className={styles.comparisonSplit}>
                            <div className={`${styles.codePanel} ${styles.codePanelJsx}`}>
                                <p style={{ margin: "0 0 0.25rem", fontWeight: 700, fontSize: "0.72rem" }}>
                                    JSX (no types)
                                </p>
                                <pre style={{ margin: 0 }}>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Typo in prop — no error!
<Greeting nme="Alice" />
// Runtime: "Hello, undefined!"`}</pre>
                                <p className={styles.errorLine} style={{ margin: "0.25rem 0 0" }}>
                                    Bug reaches the user.
                                </p>
                            </div>
                            <div className={`${styles.codePanel} ${styles.codePanelTsx}`}>
                                <p style={{ margin: "0 0 0.25rem", fontWeight: 700, fontSize: "0.72rem" }}>
                                    TSX (typed props)
                                </p>
                                <pre style={{ margin: 0 }}>{`function Greeting({ name }: {
  name: string;
}) {
  return <h1>Hello, {name}!</h1>;
}

// Typo in prop — compile error!
<Greeting nme="Alice" />
// Error: 'nme' does not exist`}</pre>
                                <p className={styles.successLine} style={{ margin: "0.25rem 0 0" }}>
                                    Bug caught before build.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`// TypeScript adds types to your React components:

// 1. Type your props:
interface UserCardProps {
    name: string;
    role: "admin" | "editor" | "viewer";
    isActive?: boolean; // optional prop
}

// 2. Use them in the component:
const UserCard = ({ name, role, isActive = true }: UserCardProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
            {isActive && <span>Active</span>}
        </div>
    );
};

// 3. TypeScript catches mistakes:
<UserCard name="Alice" role="admin" />     // OK
<UserCard name="Alice" role="superuser" /> // Error: not a valid role
<UserCard role="admin" />                  // Error: missing "name"
<UserCard name={42} role="admin" />        // Error: name must be string`}</code></pre>
                </div>

                <div className={styles.demoBox}>
                    <p className={styles.demoLabel}>TypeScript Benefits at a Glance</p>
                    <div className={styles.benefitGrid}>
                        <div className={styles.benefitCard}>
                            <strong>Type Safety</strong>
                            Catch bugs at compile time, not runtime
                        </div>
                        <div className={styles.benefitCard}>
                            <strong>Autocompletion</strong>
                            IDE suggests valid props, methods, and values
                        </div>
                        <div className={styles.benefitCard}>
                            <strong>Refactoring</strong>
                            Rename a prop and every usage updates safely
                        </div>
                        <div className={styles.benefitCard}>
                            <strong>Documentation</strong>
                            Types serve as living documentation for your code
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    TSX = TypeScript + JSX. It gives you the same JSX syntax you know, plus
                    compile-time type checking for props, state, and events. The initial learning
                    curve pays off quickly — fewer bugs, better IDE support, safer refactoring.
                    Most new React projects in 2024+ default to TypeScript. The trade-off is
                    slightly more verbose code, but the safety net is worth it for any serious
                    project.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Convert this JSX component to TSX:
                    </p>
                    <ul>
                        <li>Add a <code>ProductProps</code> interface with <code>name: string</code>, <code>price: number</code>, <code>inStock: boolean</code></li>
                        <li>Type the component function with the interface</li>
                        <li>Add a <code>category</code> prop typed as <code>"electronics" | "clothing" | "food"</code></li>
                        <li>Try passing an invalid prop value — observe the compile error</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default WhyTypescript;
