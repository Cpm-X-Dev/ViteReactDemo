import { Outlet } from "react-router";
import { SubNav } from "./_components/SubNav";
import styles from "./Forms.module.css";

const Forms = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h2 className={styles.title}>Using Forms</h2>
                <p className={styles.subtitle}>
                    Controlled inputs, multi-field state, and validation patterns.
                </p>
            </header>
            <SubNav />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default Forms;
