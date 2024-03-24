import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard";
import {App} from "@/components/App";
import {Main} from "@/page/components/main";
import {Event} from "@/page/components/event";
import {All} from "@/page/components/studio/all";
import {Create} from "@/page/components/studio/create";
import {Refactor} from "@/page/components/studio/refactor";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: Routes.eventRoutes.main,
                element: <Main/>
            },
            {
                path: Routes.eventRoutes.event + "/:id",
                element: <Event/>
            },
            {
                path: Routes.eventRoutes.studio.all,
                element: <All/>
            },
            {
                path: Routes.eventRoutes.studio.create,
                element: <Create/>
            },
            {
                path: Routes.eventRoutes.studio.refactor + "/:id",
                element: <Refactor/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;