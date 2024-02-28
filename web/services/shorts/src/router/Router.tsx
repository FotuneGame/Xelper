import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes/index";
import {App} from "@/components/App";
import {Shorts} from "@/page/components/shorts";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Shorts/>
            },
            {
                path: Routes.shortsRoutes.base,
                element: <Shorts/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;