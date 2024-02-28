import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes/index";
import {App} from "@/components/App";
import {Messenger} from "@/page/components/messenger";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Messenger/>
            },
            {
                path: Routes.messengerRoutes.base,
                element: <Messenger/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;