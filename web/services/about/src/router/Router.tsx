import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes/index";
import {App} from "@/components/App";
import {About} from "@/page/components/about";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <About/>
            },
            {
                path: Routes.aboutRoutes.base,
                element: <About/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;