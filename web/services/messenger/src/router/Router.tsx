import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard";
import {App} from "@/components/App";
import {Main} from "@/page/main";
import {Create} from "@/page/chat/create";
import {Refactor} from "@/page/chat/refactor";
import {Chat} from "@/page/chat/chat";
import {AddFriend} from "@/page/chat/add_friend";
import {Users} from "@/page/chat/all_info/users";
import {Media} from "@/page/chat/all_info/media";
import {LinkChat} from "@/page/chat/all_info/link";
import {RefactorList} from "@/page/friend/refactor_list";
import {Search} from "@/page/friend/search";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: Routes.messengerRoutes.main,
                element: <Main/>
            },
            {
                path: Routes.messengerRoutes.chat.base + "/:id_chat",
                element: <Chat/>
            },
            {
                path: Routes.messengerRoutes.chat.create + "/:id_chat",
                element: <Create/>
            },
            {
                path: Routes.messengerRoutes.chat.refactor + "/:id_chat",
                element: <Refactor/>
            },
            {
                path: Routes.messengerRoutes.chat.add_friend + "/:id_chat",
                element: <AddFriend/>
            },
            {
                path: Routes.messengerRoutes.chat.all_info.users + "/:id_chat",
                element: <Users/>
            },
            {
                path: Routes.messengerRoutes.chat.all_info.media + "/:id_chat",
                element: <Media/>
            },
            {
                path: Routes.messengerRoutes.chat.all_info.link + "/:id_chat",
                element: <LinkChat/>
            },
            {
                path: Routes.messengerRoutes.friend.refactor_list,
                element: <RefactorList/>
            },
            {
                path: Routes.messengerRoutes.friend.search,
                element: <Search/>
            },
        ],
        errorElement:<ErrorCard/>
    },
]

export const router = createBrowserRouter(routes);

export default routes;