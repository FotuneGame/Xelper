import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";
import {App} from "@/components/App";
import {Main} from "@/page/components/main";
import {All} from "@/page/components/studio/all";
import {Create} from "@/page/components/studio/create";
import {Refactor} from "@/page/components/studio/refactor";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: Routes.shortsRoutes.main,
                element: <Main/>
            },
            {
                path: Routes.shortsRoutes.studio.all,
                element: <All/>
            },
            {
                path: Routes.shortsRoutes.studio.create,
                element: <Create/>
            },
            {
                path: Routes.shortsRoutes.studio.refactor + "/:id",
                element: <Refactor/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;