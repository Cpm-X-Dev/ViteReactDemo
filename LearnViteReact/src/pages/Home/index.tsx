import { Link } from "react-router";
import styles from "./Home.module.css";

const categories = [
    {
        id: 1,
        title: "React Essentials",
        path: "/essentials",
        description: "Components, props, JSX, conditional rendering, lists, SSR/CSR, and why React & TypeScript.",
        lessons: 7,
    },
    {
        id: 2,
        title: "React Hooks",
        path: "/hooks",
        description: "useState, useEffect, useRef, useContext, useMemo/useCallback, and custom hooks.",
        lessons: 6,
    },
    {
        id: 3,
        title: "React Router",
        path: "/router",
        description: "Declarative routing, nested routes, navigation, and URL params.",
        lessons: 4,
    },
    {
        id: 4,
        title: "Using Forms",
        path: "/forms",
        description: "Controlled inputs, multi-field forms, and validation.",
        lessons: 3,
    },
];

const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <h1 className={styles.title}>Learn Vite + React</h1>
                <p className={styles.subtitle}>
                    Interactive lessons with live demos, real-life thinking, and hands-on exercises.
                </p>
            </header>

            <section className={styles.categoriesSection}>
                <h2 className={styles.sectionTitle}>Lessons</h2>
                <div className={styles.categoryList}>
                    {categories.map((cat) => (
                        <Link key={cat.id} to={cat.path} className={styles.categoryCard}>
                            <h3 className={styles.categoryName}>{cat.title}</h3>
                            <p className={styles.categoryDescription}>{cat.description}</p>
                            <span className={styles.lessonCount}>{cat.lessons} lessons</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.aboutSection}>
                <h2 className={styles.sectionTitle}>How It Works</h2>
                <ol className={styles.stepsList}>
                    <li>Pick a category above to start learning.</li>
                    <li>Each lesson explains the concept with real-life context.</li>
                    <li>Try the interactive demos to see the concept in action.</li>
                    <li>Complete the practice exercise to solidify your understanding.</li>
                </ol>
            </section>
        </div>
    );
};

export default Home;
