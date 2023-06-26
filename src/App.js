//
//
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";

const appRouter = createBrowserRouter([{}]);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Body />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
