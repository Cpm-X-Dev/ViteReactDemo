import { navLinks } from "./navLinks";
import styles from "./Navigation.module.css";

export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{navLinks.map((link) => {
					return (
						<li key={link.id} className={styles.navItem}>
							{link.name}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
