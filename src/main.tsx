import React from "react";
import ReactDOM from "react-dom/client";
/** Local Modules */
import App from "App";
/** Styles */
import "styles/index.css";

const root: HTMLElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)