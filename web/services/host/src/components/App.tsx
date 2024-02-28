import React from 'react';
import {Link, Outlet} from "react-router-dom";

//для примера
import {Routes} from "@packages/shared/routes/index";
import {ExempleUtils} from "@packages/shared/utils/ExempleUtils";
import ExempleComponent from "@packages/shared/UI_KIT/ExempleComponent";

export const App = () => {
    ExempleUtils();
    return (
        <div>

            <h1>Платформа на текущий момент для HOST (задана env):{__PLATFORM__} , {__DEV__}</h1>
            <hr/>
            <div>
                <Link to={Routes.aboutRoutes.base}>about</Link>
                <br/>
                <Link to={Routes.eventRoutes.base}>event</Link>
                <br/>
                <Link to={Routes.messengerRoutes.base}>messenger</Link>
                <br/>
                <Link to={Routes.shortsRoutes.base}>shorts</Link>
                <br/>
                <Link to={Routes.userRoutes.base}>user</Link>
                <br/>
            </div>
            <hr/>

            <ExempleComponent/>
            <hr/>


            <Outlet/>
        </div>
    );
};