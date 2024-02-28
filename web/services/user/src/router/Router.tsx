import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes/index";
import {App} from "@/components/App";
import {User} from "@/page/components/user";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <User/>
            },
            {
                path: Routes.userRoutes.base,
                element: <User/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;