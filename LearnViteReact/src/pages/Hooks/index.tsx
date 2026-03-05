import { Outlet } from "react-router";
import { SubNav } from "./_components/SubNav";
import styles from "./Hooks.module.css";

const Hooks = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h2 className={styles.title}>React Hooks</h2>
                <p className={styles.subtitle}>
                    State, side effects, refs, and reusable logic.
                </p>
            </header>
            <SubNav />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default Hooks;
