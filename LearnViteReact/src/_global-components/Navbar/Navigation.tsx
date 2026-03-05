import { NavLink } from "react-router";
import { navLinks } from "./navLinks";
import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {navLinks.map((link) => (
                    <li key={link.id} className={styles.navItem}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.navLink} ${styles.navLinkActive}`
                                    : styles.navLink
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
