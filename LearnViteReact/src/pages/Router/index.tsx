import { Outlet } from "react-router";
import { SubNav } from "./_components/SubNav";
import styles from "./Router.module.css";

const RouterLayout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h2 className={styles.title}>React Router</h2>
                <p className={styles.subtitle}>
                    Client-side navigation with declarative React Router v7.
                </p>
            </header>
            <SubNav />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default RouterLayout;
