import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./bootstrap";
import Home from "./components/Home";
import Test from "./components/Test";
import "../css/app.css";

// Define the routes
const routers = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/test",
        element: <Test />,
    },
];

// App component that uses the Router and displays the current route
const App = () => <RouterProvider router={createBrowserRouter(routers)} />;

// Create and render the React Router instance
createRoot(document.getElementById("app")).render(<App />);
