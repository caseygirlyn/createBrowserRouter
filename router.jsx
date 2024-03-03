import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Dashboard from "./src/routes/Dashboard";
import Contact from "./src/routes/Contact";
import Projects from "./src/routes/Projects";

export const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/contact", element: <Contact />},
    { path: ":slug", element: <Projects />},
]);