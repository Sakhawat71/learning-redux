import App from "@/App";
import Counter from "@/pages/Counter";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Tasks />
            },
            {
                path: "counter",
                element: <Counter />
            },
            {
                path: "users",
                element: <Users />
            }
        ]
    },
    {
        path: "/login",
        element: <h1>Login</h1>
    }

]);

export default routes;