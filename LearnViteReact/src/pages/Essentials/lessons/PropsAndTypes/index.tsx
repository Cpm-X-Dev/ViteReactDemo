import styles from "./PropsAndTypes.module.css";

type UserCardProps = {
    name: string;
    role: string;
};

const UserCard = ({ name, role }: UserCardProps) => {
    return (
        <div className={styles.userCard}>
            <p className={styles.userName}>{name}</p>
            <p className={styles.userRole}>{role}</p>
        </div>
    );
};

type BadgeProps = {
    children: React.ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
    return <span className={styles.badge}>{children}</span>;
};

const PropsAndTypes = () => {
    return (
        <div className={styles.lesson}>
            <header className={styles.lessonHeader}>
                <h2>Props & Types</h2>
                <p className={styles.subtitle}>
                    Passing data to components and enforcing types with TypeScript.
                </p>
            </header>

            <section className={styles.section}>
                <h3>What & Why</h3>
                <p>
                    <strong>Props</strong> (short for properties) are how you pass data from
                    a parent component to a child. Think of them like function arguments.
                    TypeScript lets you define the exact shape of props a component expects,
                    catching mistakes at compile time instead of runtime.
                </p>
                <div className={styles.realLife}>
                    <strong>Real-life thinking:</strong> Props are like function arguments.
                    When you call <code>calculateTax(price, rate)</code>, you pass data in.
                    Components work the same way — <code>&lt;Invoice amount=&#123;100&#125;
                    currency="USD" /&gt;</code>. The <code>children</code> prop is special:
                    it's whatever you put between the opening and closing tags, like
                    wrapping content in a layout or badge.
                </div>
            </section>

            <section className={styles.section}>
                <h3>Interactive Demo</h3>
                <p>
                    A <code>UserCard</code> with typed props, and a <code>Badge</code> that
                    uses the <code>children</code> prop:
                </p>
                <div className={styles.demoBox}>
                    <UserCard name="Alice Chen" role="Frontend Engineer" />
                    <UserCard name="Bob Martinez" role="Backend Engineer" />
                    <div>
                        <Badge>Admin</Badge>{" "}
                        <Badge>Premium</Badge>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <pre><code>{`type UserCardProps = {
    name: string;
    role: string;
};

const UserCard = ({ name, role }: UserCardProps) => {
    return (
        <div className={styles.userCard}>
            <p className={styles.userName}>{name}</p>
            <p className={styles.userRole}>{role}</p>
        </div>
    );
};

type BadgeProps = {
    children: React.ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
    return <span className={styles.badge}>{children}</span>;
};

// Usage:
// <UserCard name="Alice Chen" role="Frontend Engineer" />
// <Badge>Admin</Badge>`}</code></pre>
                </div>
            </section>

            <section className={styles.section}>
                <h3>Key Takeaways</h3>
                <p>
                    Always define a <code>type</code> for your props — it documents what
                    the component needs and prevents bugs. Use <code>children:
                    React.ReactNode</code> for wrapper components. Props are read-only:
                    a child should never modify the props it receives.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Practice Exercise</h3>
                <div className={styles.exerciseBox}>
                    <p>
                        Create an <code>AlertBox</code> component that accepts:
                    </p>
                    <ul>
                        <li><code>variant</code>: "info" | "warning" | "error"</li>
                        <li><code>title</code>: string</li>
                        <li><code>children</code>: React.ReactNode (the alert message body)</li>
                        <li>Style the background color differently based on the variant</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default PropsAndTypes;
