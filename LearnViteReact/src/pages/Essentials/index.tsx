import { Outlet } from "react-router";
import { SubNav } from "./_components/SubNav";
import styles from "./Essentials.module.css";

const Essentials = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h2 className={styles.title}>React Essentials</h2>
                <p className={styles.subtitle}>
                    The building blocks of every React application.
                </p>
            </header>
            <SubNav />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default Essentials;
