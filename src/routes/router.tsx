import { createBrowserRouter } from "react-router-dom";

import App from "../App.js";
import ErrorPage from "../pages/errors/ErrorPage.js";
import Watch from "../pages/Watch/index.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/:id",
        element: <Watch />,
        errorElement: <ErrorPage/>
    },
]);
