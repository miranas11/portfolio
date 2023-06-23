//
//
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([{}]);

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Body />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
