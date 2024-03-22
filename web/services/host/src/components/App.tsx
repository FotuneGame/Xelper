import React from 'react';
import style from "./App.module.scss";
import {Outlet} from "react-router-dom";


import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export const App = () => {
    return (
        <div id={style.app}>
            <Navbar/>
            <section id={style.content}>
                <Outlet/>
            </section>
            <Footer/>
        </div>
    );
};