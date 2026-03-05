import styles from "./App.module.css";

// ─── Import your activity components here ───────────────────────────
// Basics:
// import { HelloComponent } from "./activities/basics/1-hello-component/HelloComponent";
// import { ProfileCard } from "./activities/basics/2-props-and-types/ProfileCard";
// import { StatusBadge } from "./activities/basics/3-conditional-rendering/StatusBadge";
// import { FruitList } from "./activities/basics/4-list-rendering/FruitList";

// React Hooks:
// import { Counter } from "./activities/react-hooks/1-usestate-counter/Counter";
// import { ThemeToggle } from "./activities/react-hooks/2-usestate-toggle/ThemeToggle";
// import { UserProfile } from "./activities/react-hooks/3-usestate-object/UserProfile";
// import { Timer } from "./activities/react-hooks/4-useeffect-timer/Timer";
// import { UserFetcher } from "./activities/react-hooks/5-useeffect-fetch/UserFetcher";
// import { LocalStorageDemo } from "./activities/react-hooks/6-custom-hook/LocalStorageDemo";

// Forms:
// import { NameForm } from "./activities/forms/1-controlled-input/NameForm";
// import { RegistrationForm } from "./activities/forms/2-multi-field-form/RegistrationForm";
// import { LoginForm } from "./activities/forms/3-form-validation/LoginForm";
// ─────────────────────────────────────────────────────────────────────

type ActivityCategory = {
    category: string;
    items: { id: string; name: string }[];
};

const activityCategories: ActivityCategory[] = [
    {
        category: "Basics",
        items: [
            { id: "B1", name: "Hello Component" },
            { id: "B2", name: "Props and Types" },
            { id: "B3", name: "Conditional Rendering" },
            { id: "B4", name: "List Rendering" },
        ],
    },
    {
        category: "React Hooks",
        items: [
            { id: "H1", name: "useState — Counter" },
            { id: "H2", name: "useState — Toggle" },
            { id: "H3", name: "useState — Object State" },
            { id: "H4", name: "useEffect — Timer" },
            { id: "H5", name: "useEffect — Fetch Data" },
            { id: "H6", name: "Custom Hook — useLocalStorage" },
        ],
    },
    {
        category: "Forms",
        items: [
            { id: "F1", name: "Controlled Input" },
            { id: "F2", name: "Multi-Field Form" },
            { id: "F3", name: "Form Validation" },
        ],
    },
];

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Vite + React + TypeScript Activities</h1>
                    <p className={styles.subtitle}>Hands-on exercises for learning React fundamentals.</p>
                </header>

                {activityCategories.map((cat) => (
                    <section key={cat.category} className={styles.activitiesSection}>
                        <h2 className={styles.sectionTitle}>{cat.category}</h2>
                        <ol className={styles.activityList}>
                            {cat.items.map((activity) => (
                                <li key={activity.id} className={styles.activityItem}>
                                    <span className={styles.activityNumber}>{activity.id}</span>
                                    <span className={styles.activityName}>{activity.name}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                ))}

                <hr className={styles.divider} />

                <main className={styles.content}>
                    <p className={styles.hint}>
                        Uncomment an import above and render the component below to work on an activity.
                    </p>

                    {/* ─── Render your activity component here ─── */}
                    
                </main>

                <footer className={styles.footer}>
                    &copy;2026 Vite + React + TypeScript Activities
                </footer>
            </div>
        </div>
    );
};

export default App;