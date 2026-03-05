import { NavLink } from "react-router";
import styles from "./SubNav.module.css";

const lessons = [
    { id: 1, name: "Components & JSX", path: "/essentials/components-jsx" },
    { id: 2, name: "Props & Types", path: "/essentials/props-types" },
    { id: 3, name: "Conditional Rendering", path: "/essentials/conditional-rendering" },
    { id: 4, name: "Lists & Keys", path: "/essentials/lists-keys" },
    { id: 5, name: "SSR & CSR", path: "/essentials/ssr-and-csr" },
    { id: 6, name: "Why React", path: "/essentials/why-react" },
    { id: 7, name: "Why TypeScript", path: "/essentials/why-typescript" },
];

export const SubNav = () => {
    return (
        <nav className={styles.subNav}>
            <ul className={styles.subNavList}>
                {lessons.map((lesson) => (
                    <li key={lesson.id} className={styles.subNavItem}>
                        <NavLink
                            to={lesson.path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.subNavLink} ${styles.subNavLinkActive}`
                                    : styles.subNavLink
                            }
                        >
                            {lesson.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
