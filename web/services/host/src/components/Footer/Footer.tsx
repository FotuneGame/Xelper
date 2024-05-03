import React from 'react';
import style from "./Footer.module.scss";
import styles from "./Footer.module.scss";
import { Link } from 'react-router-dom';
import {FaInstagram,FaYoutube,FaTelegram,FaVk,FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="z-2">
            <div className={["w-100 m-0 d-grid d-md-flex row justify-content-center  align-content-center", style.up_back].join(" ")}>
                <div className={"col-12 col-md-5 d-flex justify-content-center py-3"}>
                    <Link to="https://www.instagram.com" className={styles.buttonLink}>
                            <FaInstagram  color={"white"} size={"1.5rem"}/>
                    </Link>
                    <Link to="https://www.youtube.com" className={styles.buttonLink}>
                            <FaYoutube color={"white"} size={"1.5rem"} />
                    </Link>
                    <Link to="https://t.me/telegram" className={styles.buttonLink}>
                            <FaTelegram color={"white"} size={"1.5rem"} />
                    </Link>
                    <Link to="https://vk.ru" className={styles.buttonLink}>
                            <FaVk color={"white"} size={"1.5rem"} />
                    </Link>
                    <Link to="https://github.com" className={styles.buttonLink}>
                            <FaGithub color={"white"} size={"1.5rem"} />
                    </Link>
                </div>
                <div className={"col-12 col-md-5 d-flex justify-content-center py-3"}>
                    <a href="mailto:example@gmail.com" className={styles.emailLink}>Обратная связь: example@gmail.com</a>
                </div>
            </div>
            <div className={["w-100 d-flex justify-content-center",style.down_back].join(" ")}>
                <div className="h-100 d-flex">
                    <a className="text-white align-self-center" href="#">Xelper.com </a>
                    <p style={{ color: '#2d2d2d' }}>_</p>
                    <p className="text-white m-0 p-0 align-self-center"> © 2024 </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;