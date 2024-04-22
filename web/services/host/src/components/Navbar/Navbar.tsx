import React, { useState, useEffect } from 'react';
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { Navbar as NavbarB, Container, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import ContentNavbar from './ContentNavbar';

import React, { useState, useCallback } from 'react';
import "./Navbar.module.scss";

//Импорты всех UI_KIT

import ButtonUI from "@packages/shared/UI_KIT/Button";
import Search from '@packages/shared/UI_KIT/Search';


//ипорты api
import APIGetTestPost from "@packages/shared/API/test";




//для примера
import { ExempleUtils } from "@packages/shared/utils/ExempleUtils";

/*
const About = () => {
    ExempleUtils();
    //для Search
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const search = (value: string) => alert("search: " + value);
    const methodSearchHelp = async () => {
        const res = await APIGetTestPost(5, 1);
        res.data = res.data.map((item) => item.title);
        return res;
    };


    return (
        <div>

            <div className={"w-50"}>

                <div>
                    <Search placeholder={"Введите запрос"} event={search} searchSetting={searchSetting} setSearchSetting={setSearchSetting} methodHelp={methodSearchHelp} />
                    {searchSetting ? <p>Расширеное меню поиса</p> : null}
                </div>
            </div>
            <hr />


        </div>
    );
};

export default About;*/




const Navbar = () => {
    const [show, setShow] = useState(false);
    const switchOffCanvas = () => setShow(!show);

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth") || sessionStorage.getItem("auth")) setAuth(true);
        else exit();
    }, []);

    const exit = () => {
        localStorage.clear();
        sessionStorage.clear();
        setAuth(false);
    }

    //для Search
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const search = (value: string) => alert("search: " + value);
    const methodSearchHelp = async () => {
        const res = await APIGetTestPost(5, 1);
        res.data = res.data.map((item) => item.title);
        return res;
    };

    return (
        <NavbarB collapseOnSelect expand={false} className={["mb-100 h-10 bg-white shadow fixed-top z-3", style.navbar].join(" ")}>
            <Container className="mx-auto px-0 d-flex align-items-center justify-content-between">
                <NavbarB.Brand>
                    <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                </NavbarB.Brand>
                <div className={"w-50 h-10"}>

                    <div>
                        <Search placeholder={"Введите запрос"} event={search} searchSetting={searchSetting} setSearchSetting={setSearchSetting} methodHelp={methodSearchHelp} />
                        {searchSetting ? <p>Расширеное меню поиса</p> : null}
                    </div>
                </div>
                <ButtonUI className={"border-0 d-flex align-content-center"} variant={"link"} callback={switchOffCanvas}>
                    <FaBars color={"black"} size={"1rem"} />
                </ButtonUI>
                <Offcanvas show={show} onHide={switchOffCanvas} placement="end">
                    <Offcanvas.Title className={"w-100 d-flex justify-content-between"}>
                        <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                        <ButtonUI className={"border-0 d-flex align-content-center align-self-center"} variant={"link"} callback={switchOffCanvas}>
                            <FaTimes color={"black"} size={"1rem"} />
                        </ButtonUI>
                    </Offcanvas.Title>
                    <Offcanvas.Body>
                        <div className={style.offcanvasButtons}>
                            <NavLink className={style.offcanvasButton} to={"/events"} onClick={switchOffCanvas}>Мероприятия</NavLink>
                            <NavLink className={style.offcanvasButton} to={"/shorts"} onClick={switchOffCanvas}>Шортсы</NavLink>
                            <NavLink className={style.offcanvasButton} to={"/about"} onClick={switchOffCanvas}>О нас</NavLink>
                        </div>
                        {auth && (
                            <ButtonUI className={"mx-auto mx-lg-2 my-lg-auto my-2 exitButton"} variant={"danger"} callback={exit}>
                                <NavLink className="text-white text-decoration-none" to={"/"}>Выход</NavLink>
                            </ButtonUI>
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </NavbarB>
    );
};

export default Navbar;




/*
import React, { useState, useEffect } from 'react';
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import { Navbar as NavbarB, Container, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import ButtonUI from "@packages/shared/UI_KIT/Button";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const switchOffCanvas = () => setShow(!show);

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth") || sessionStorage.getItem("auth")) setAuth(true);
        else exit();
    }, []);

    const exit = () => {
        localStorage.clear();
        sessionStorage.clear();
        setAuth(false);
    }

    return (
        <NavbarB collapseOnSelect expand={false} className={["bg-white shadow fixed-top z-3", style.navbar].join(" ")}>
            <Container className="mx-auto px-0 d-flex align-items-center justify-content-between">
                <NavbarB.Brand>
                    <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                </NavbarB.Brand>
                
                <div className={style.search}>
                    <Form inline className="mb-3">
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className={`${style.searchInput} mr-sm-2`}
                        />
                    </Form>
                    <Button variant="outline-success" className={style.searchButton}>
                        <FaSearch />
                    </Button>
                </div>
                <ButtonUI className={"border-0 d-flex align-content-center"} variant={"link"} callback={switchOffCanvas}>
                    <FaBars color={"black"} size={"1rem"} />
                </ButtonUI>
                <NavbarB.Offcanvas show={show} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className={"w-100 d-flex justify-content-between"}>
                            <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                            <ButtonUI className={"border-0 d-flex align-content-center align-self-center"} variant={"link"} callback={switchOffCanvas}>
                                <FaTimes color={"black"} size={"1rem"} />
                            </ButtonUI>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className={style.sidebar}>
                            <ul className={style.nav}>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                            </ul>
                        </div>
                    </Offcanvas.Body>
                </NavbarB.Offcanvas>
            </Container>
        </NavbarB>
    );
};

export default Navbar;*/



/*
import { React, useState, useEffect } from 'react';
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import {Navbar as NavbarB, Container, Offcanvas} from "react-bootstrap";
import ContentNavbar from './ContentNavbar';
import {FaBars,FaTimes} from "react-icons/fa"
import ButtonUI from "@packages/shared/UI_KIT/Button";

const Navbar = () => {

    const [show, setShow] = useState(false);
    const switchOffCanvas = () => show ? setShow(false) : setShow(true);

    const [auth,setAuth] = useState<boolean>(false);
    useEffect(()=>{
        if(localStorage.getItem("auth") || sessionStorage.getItem("auth"))setAuth(true);
        else exit();
    },[localStorage.getItem("auth"),sessionStorage.getItem("auth") ]);

    const exit = () =>{
        localStorage.clear();
        sessionStorage.clear();
        setAuth(false);

    }

    return (
        <NavbarB collapseOnSelect expand={false} className={["bg-white shadow fixed-top z-3",style.navbar].join(" ")}>
            <Container className="mx-auto px-0">
                <NavbarB.Brand >
                    <NavLink className="text-decoration-none text-black" to={"/"}>Тестовый навбар для перехода по страницам</NavLink>
                </NavbarB.Brand>
                <ButtonUI className={"border-0 d-flex align-content-center"} variant={"link"}  callback={switchOffCanvas}>
                    <FaBars color={"black"} size={"1rem"}/>
                </ButtonUI>
                <NavbarB.Offcanvas show={show} placement="end">
                    <Offcanvas.Header>
                        <Offcanvas.Title className={"w-100 d-flex justify-content-between"}>
                            <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                            <ButtonUI className={"border-0 d-flex align-content-center align-self-center"} variant={"link"} callback={switchOffCanvas}>
                                <FaTimes color={"black"} size={"1rem"}/>
                            </ButtonUI>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ContentNavbar switchOffCanvas={switchOffCanvas} auth={auth} exit={exit}/>
                    </Offcanvas.Body>
                </NavbarB.Offcanvas>
            </Container>
        </NavbarB>
    );
};

export default Navbar;*/