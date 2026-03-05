import styles from "./App.module.css";

// Import your activity components here:
// import { MyComponent } from "./activities/1-simple-component/MyComponent";
// import { HooksDemo } from "./activities/2-react-hooks/HooksDemo";

const activities = [
    { id: 1, name: "Creating a Simple Component" },
    { id: 2, name: "Using React Hooks" },
] as const;

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Vite + React + TypeScript Activities</h1>
                    <p className={styles.subtitle}>Hands-on exercises for learning React fundamentals.</p>
                </header>

                <section className={styles.activitiesSection}>
                    <h2 className={styles.sectionTitle}>Activities</h2>
                    <ol className={styles.activityList}>
                        {activities.map((activity) => (
                            <li key={activity.id} className={styles.activityItem}>
                                <span className={styles.activityNumber}>{activity.id}.</span>
                                <span className={styles.activityName}>{activity.name}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                <hr className={styles.divider} />

                <main className={styles.content}>
                    <p className={styles.hint}>
                        Import and render your activity components below.
                    </p>

                    {/* Render your activity components here: */}
                    {/* <MyComponent /> */}
                    {/* <HooksDemo /> */}
                </main>

                <footer className={styles.footer}>
                    &copy;2026 Vite + React + TypeScript Activities
                </footer>
            </div>
        </div>
    );
};

export default App;