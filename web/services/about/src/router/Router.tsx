import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import {App} from "@/components/App";
import { About } from "@/page/components/about";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: Routes.aboutRoutes.main,
                element: <About/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;