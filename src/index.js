import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { ConsolePage } from "./pages";

import './styling.css'

const root = createRoot(document.getElementById("root"));

root.render(<ConsolePage />);
