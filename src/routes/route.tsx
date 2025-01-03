import App from "@/App";
import Counter from "@/pages/Counter";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/counter",
                element: <Counter />
            }
        ]
    },
    {
        path: "/login",
        element: <h1>Login</h1>
    }

]);

export default routes;