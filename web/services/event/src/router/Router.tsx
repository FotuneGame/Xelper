import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes/index";
import {App} from "@/components/App";
import {Event} from "@/page/components/event";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Event/>
            },
            {
                path: Routes.eventRoutes.base,
                element: <Event/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;