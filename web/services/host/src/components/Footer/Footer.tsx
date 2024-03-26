import React from 'react';
import style from "./Footer.module.scss";
import {FaGoogle,FaWhatsapp,FaTelegram,FaVk,FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="z-2">
            <div className={["w-100 m-0 d-flex justify-content-center align-content-center",style.up_back].join(" ")}>
                <section className="w-50 h-100 d-grid d-md-flex justify-content-center">
                    <a className="mx-auto d-flex" href="mailto:titovgrisha04@gmail.com">
                        <FaGoogle className="align-self-center" size="1.5rem"  color="white"/>
                    </a>
                    <a className="mx-auto d-flex" href="#" role="button">
                        <FaTelegram className="align-self-center"  size="1.5rem" color="white"/>
                    </a>
                    <a className="mx-auto d-flex" href="#" role="button">
                        <FaWhatsapp className="align-self-center"  size="1.5rem" color="white"/>
                    </a>
                    <a className="mx-auto d-flex" href="#" role="button">
                        <FaVk className="align-self-center"  size="1.5rem" color="white"/>
                    </a>
                    <a className="mx-auto d-flex" href="#" role="button">
                        <FaGithub className="align-self-center"  size="1.5rem" color="white"/>
                    </a>
                </section>
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