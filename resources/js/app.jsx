import "@shopify/polaris/dist/styles.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../css/app.css";
import "./bootstrap";
import Home from "./components/Home";
import Test from "./components/Test";
import { AppProvider, Page, Button } from "@shopify/polaris";
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
const App = () => (
    <AppProvider>
        <Page title="Example app">
            <RouterProvider router={createBrowserRouter(routers)} />;
        </Page>
    </AppProvider>
);

// Create and render the React Router instance
createRoot(document.getElementById("app")).render(<App />);
