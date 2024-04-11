import React from 'react';
import style from "./Footer.module.scss";
import {FaGoogle,FaWhatsapp,FaTelegram,FaVk,FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="z-2">
            <div className={["w-100 m-0 d-flex justify-content-center align-content-center",style.up_back].join(" ")}>
                Тестовый футтер
            </div>
            <div className={["w-100 d-flex justify-content-center",style.down_back].join(" ")}>
                <div className="h-100 d-flex">
                    <p className="text-white m-0 p-0 align-self-center">© 2024 Copyright: </p>
                    <a className="text-white align-self-center" href="#">Xelper.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;