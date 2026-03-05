import { Outlet } from "react-router";
import { Navigation } from "./_global-components";
import Footer from "./_global-components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;