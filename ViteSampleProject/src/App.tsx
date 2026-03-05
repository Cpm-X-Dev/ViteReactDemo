import { Navigation } from "./_global-components";
import Footer from "./_global-components/Footer/Footer";
import Home from "./pages/Home";

const App = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <Footer />
        </div>
    )
}

export default App;