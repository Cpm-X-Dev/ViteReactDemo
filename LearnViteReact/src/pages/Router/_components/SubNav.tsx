import { NavLink } from "react-router";
import styles from "./SubNav.module.css";

const lessons = [
    { id: 1, name: "Declarative Routing", path: "/router/declarative-routing" },
    { id: 2, name: "Nested Routes", path: "/router/nested-routes" },
    { id: 3, name: "Navigation & Links", path: "/router/navigation-links" },
    { id: 4, name: "Route Params", path: "/router/route-params" },
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
