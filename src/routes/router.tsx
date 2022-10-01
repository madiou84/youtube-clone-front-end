import React from "react";
import {createBrowserRouter} from "react-router-dom";

import App from "../App.js";
import ErrorPage from "../pages/errors/ErrorPage.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
]);
