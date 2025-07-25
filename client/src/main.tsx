import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function MainApp() {
    return (
        <IntlProvider locale={"en"} messages={{}}>
            {/* <Provider store={store}> */}
                <BrowserRouter>
                
                        <App />
                  
                </BrowserRouter>
            {/* </sProvider> */}
        </IntlProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<MainApp />);
