import { NavLink } from "react-router";
import styles from "./SubNav.module.css";

const lessons = [
    { id: 1, name: "useState", path: "/hooks/use-state" },
    { id: 2, name: "useEffect", path: "/hooks/use-effect" },
    { id: 3, name: "useRef", path: "/hooks/use-ref" },
    { id: 4, name: "useContext", path: "/hooks/use-context" },
    { id: 5, name: "useMemo / useCallback", path: "/hooks/use-memo-callback" },
    { id: 6, name: "Custom Hooks", path: "/hooks/custom-hooks" },
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
