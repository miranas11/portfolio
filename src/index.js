import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import "./styles/modern-normalize.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/utils.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
