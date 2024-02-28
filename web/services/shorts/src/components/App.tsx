import React from 'react';
import classes from './App.module.scss'
import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};