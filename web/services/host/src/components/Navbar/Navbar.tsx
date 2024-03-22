import React from 'react';
import "./Navbar.module.scss";
import {Link} from "react-router-dom";
import {Routes} from "@packages/shared/routes";

const Navbar = () => {
    return (
        <nav>
            <Link to={Routes.aboutRoutes.main}>about</Link>
            <br/>
            <Link to={Routes.eventRoutes.main}>event</Link>
            <br/>
            <Link to={Routes.messengerRoutes.main}>messenger</Link>
            <br/>
            <Link to={Routes.shortsRoutes.main}>shorts</Link>
            <br/>
            <Link to={Routes.userRoutes.authorization}>user (auth)</Link>
            <br/>
        </nav>
    );
};

export default Navbar;