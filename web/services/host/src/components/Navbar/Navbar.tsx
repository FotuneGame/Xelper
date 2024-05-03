import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as NavbarB, Container, Offcanvas } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import ButtonUI from '@packages/shared/UI_KIT/Button'; // Assuming you have a ButtonUI component
import Search from '@packages/shared/UI_KIT/Search'; // Assuming you have a Search component
import APIGetTestPost from "@packages/shared/API/test"; // Assuming you have an APIGetTestPost function for API calls
import style from './Navbar.module.scss'; // Assuming you have a module for styling
import DropdownUI from '@packages/shared/UI_KIT/Dropdown';
import ContentNavbar from "./ContentNavbar";
import SearchNavbar from "./SearchNavbar";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const switchOffCanvas = () => setShow(!show);
    const searchSettingOffCanvas = () => setSearchSetting(!searchSetting);


    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth") || sessionStorage.getItem("auth")) setAuth(true);
        else exit();
    }, [localStorage.getItem("auth"), sessionStorage.getItem("auth")]);

    const exit = () => {
        localStorage.clear();
        sessionStorage.clear();
        setAuth(false);
    }

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
                <div className={"w-50 h-10 d-none d-md-block"}>
                    <Search placeholder={"Введите запрос"} event={search} searchSetting={searchSetting} setSearchSetting={setSearchSetting} methodHelp={methodSearchHelp} />
                </div>
                <ButtonUI className={"border-0 d-flex align-content-center"} variant={"link"} callback={switchOffCanvas}>
                    <FaBars color={"black"} size={"1rem"} />
                </ButtonUI>
                <Offcanvas show={show} onHide={switchOffCanvas} placement="top"  className={"z-2 h-100"} backdropClassName={"z-n1"}>
                    <Offcanvas.Title className={"w-100 d-flex d-block d-md-none justify-content-end"}>
                        <ButtonUI className={"border-0 d-flex align-content-center align-self-center"} variant={"link"} callback={switchOffCanvas}>
                            <FaTimes color={"black"} size={"1rem"} />
                        </ButtonUI>
                    </Offcanvas.Title>
                    <Offcanvas.Body className={style.drop_down}>
                        <div className={"mx-auto w-75 h-10 d-block d-md-none"}>
                            <Search placeholder={"Введите запрос"} event={search} searchSetting={searchSetting} setSearchSetting={setSearchSetting} methodHelp={methodSearchHelp} />
                        </div>
                        <ContentNavbar auth={auth} exit={exit} switchOffCanvas={switchOffCanvas}/>
                    </Offcanvas.Body>
                </Offcanvas>

                <Offcanvas show={searchSetting} onHide={searchSettingOffCanvas} placement="top" className={"z-2 h-100"} backdropClassName={"z-n1"}>
                    <Offcanvas.Title className={"w-100 d-flex d-block d-md-none justify-content-end"}>
                        <ButtonUI className={"border-0 d-flex align-content-center align-self-center"} variant={"link"} callback={searchSettingOffCanvas}>
                            <FaTimes color={"black"} size={"1rem"} />
                        </ButtonUI>
                    </Offcanvas.Title>
                    <Offcanvas.Body className={style.drop_down}>
                        <SearchNavbar auth={auth} exit={exit} switchOffCanvas={searchSettingOffCanvas}/>
                    </Offcanvas.Body>
                </Offcanvas>

            </Container>
        </NavbarB>
    );
};

export default Navbar;
