import { Outlet } from "react-router";
import { Navigation } from "./_global-components";
import { Footer } from "./_global-components/Footer/Footer";
import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.app}>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
