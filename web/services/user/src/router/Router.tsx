import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard";
import {App} from "@/components/App";
import {Account} from "@/page/components/account";
import {Registration} from "@/page/components/registration";
import {Auth} from "@/page/components/auth";
import {Forget} from "@/page/components/forget";
import {Create} from "@/page/components/create";
import {Code} from "@/page/components/code";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: Routes.userRoutes.account + "/:id",
                element: <Account/>
            },
            {
                path: Routes.userRoutes.registration,
                element: <Registration/>
            },
            {
                path: Routes.userRoutes.authorization,
                element: <Auth/>
            },
            {
                path: Routes.userRoutes.forget,
                element: <Forget/>
            },
            {
                path: Routes.userRoutes.create,
                element: <Create/>
            },
            {
                path: Routes.userRoutes.code,
                element: <Code/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;