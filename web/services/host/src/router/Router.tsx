import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard";

//@ts-ignore
import aboutRoutes from 'about/Router';
//@ts-ignore
import eventRoutes from 'event/Router';
//@ts-ignore
import messengerRoutes from 'messenger/Router';
//@ts-ignore
import shortsRoutes from 'shorts/Router';
//@ts-ignore
import userRoutes from 'user/Router';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            ...eventRoutes,
            ...aboutRoutes,
            ...messengerRoutes,
            ...shortsRoutes,
            ...userRoutes,
        ],
        errorElement:<ErrorCard/>
    },
]);