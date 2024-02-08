import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// entryPoint selects the ID root in HTML and injects <App /> in it with the help of render method.
// Renders all contents inside it or any nested components.