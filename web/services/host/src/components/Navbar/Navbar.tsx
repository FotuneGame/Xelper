import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as NavbarB, Container, Offcanvas } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import ButtonUI from '@packages/shared/UI_KIT/Button'; // Assuming you have a ButtonUI component
import Search from '@packages/shared/UI_KIT/Search'; // Assuming you have a Search component
import APIGetTestPost from "@packages/shared/API/test"; // Assuming you have an APIGetTestPost function for API calls
import style from './Navbar.module.scss'; // Assuming you have a module for styling
import DropdownUI from '@packages/shared/UI_KIT/Dropdown';


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



    const [dropdownValue, setDropdownValue] = useState<string>("");


    // State for search settings
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const [eventName, setEventName] = useState('');
    const [category, setCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState('01.01.2024');
    const [endDate, setEndDate] = useState('01.01.2024');

    const handleToggleSearchConfig = () => {
        setSearchSetting(!searchSetting);
    };

    const handleApply = () => {
        // Handle applying filters
        // You can perform actions like fetching data based on the applied filters here
        // For simplicity, let's just log the filter values for now
        console.log("Event Name:", eventName);
        console.log("Category:", category);
        console.log("Search Query:", searchQuery);
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
    };

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
                        {searchSetting ? <p>Настроим поиск? </p> : null}
                    </div>
                </div>
                <ButtonUI className={"border-0 d-flex align-content-center"} variant={"link"} callback={switchOffCanvas}>
                    <FaBars color={"black"} size={"1rem"} />
                </ButtonUI>
                <Offcanvas show={show} onHide={switchOffCanvas} placement="top">
                    <Offcanvas.Title className={"w-100 d-flex justify-content-between"}>
                        <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                        <ButtonUI className={"border-0 d-flex align-content-center align-self-center"} variant={"link"} callback={switchOffCanvas}>
                            <FaTimes color={"black"} size={"1rem"} />
                        </ButtonUI>
                    </Offcanvas.Title>
                    <Offcanvas.Body>
                        <div className={style.offcanvasButtons}>
                            <NavLink className={style.offcanvasButton} to={"/about"} onClick={switchOffCanvas}>О нас   </NavLink>
                            <NavLink className={style.offcanvasButton} to={"/shorts"} onClick={switchOffCanvas}>Клипы   </NavLink>
                            <NavLink className={style.offcanvasButton} to={"/shorts"} onClick={switchOffCanvas}>Шортсы   </NavLink>
                            <NavLink className={style.offcanvasButton} to={"/events"} onClick={switchOffCanvas}>Мероприятия   </NavLink>

                            <ButtonUI className={"exitButton"} variant={"danger"} callback={exit}>
                                <NavLink className="text-black text-decoration-none" to={"/registration"}>Вход</NavLink>
                            </ButtonUI>
                         
                        </div>
                        
                        {auth && (
                            <ButtonUI className={"mx-auto mx-lg-2 my-lg-auto my-2 exitButton"} variant={"danger"} callback={exit} style={{ backgroundColor: 'green' }}>
                                <NavLink className="text-white bg-green text-decoration-none" to={"/"}>Выход</NavLink>
                            </ButtonUI>
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>

            {/* Search Filter Component */}
            <div>
                {searchSetting && (
                    <div>
                        <input
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            placeholder="Название события..."
                        />
                        <DropdownUI label={"Выберите категорию..."} names={["Благотворительность", "Вечеринки", "Хакатоны", "Комиссии", "Мероприятия"]} setValueCallback={setDropdownValue} style={{ background: 'white' }} />


                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Адрес мероприятия"
                        />
                        <div>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <button className="apply-button">Применить</button>
                    </div>
                )}
            </div>
        </NavbarB>
    );
};

export default Navbar;


/*import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as NavbarB, Container, Offcanvas } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import ButtonUI from '@packages/shared/UI_KIT/Button'; // Assuming you have a ButtonUI component
import Search from '@packages/shared/UI_KIT/Search'; // Assuming you have a Search component
import SearchFilter from './SearchFilter'; // Import the SearchFilter component

import style from './Navbar.module.scss'; // Assuming you have a module for styling

//ипорты api
import APIGetTestPost from "@packages/shared/API/test";

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

    // State for search settings
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const toggleSearchSetting = () => setSearchSetting(!searchSetting);

    // State for SearchFilter component
    const [isSearchConfigOpen, setIsSearchConfigOpen] = useState(false);

    // Search function and method to fetch search help
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
                        {/* Render Search component *//*}*/
/*                        <Search placeholder={"Введите запрос"} event={search} searchSetting={searchSetting} setSearchSetting={setSearchSetting} methodHelp={methodSearchHelp} />
                        {searchSetting ? <p>Расширенное меню поиска</p> : null}
                    </div>
                </div>
                <ButtonUI className={"border-0 d-flex align-content-center"} variant={"link"} callback={switchOffCanvas}>
                    <FaBars color={"black"} size={"1rem"} />
                </ButtonUI>
                <Offcanvas show={show} onHide={switchOffCanvas} placement="top">
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
            {/* Render the SearchFilter component *//*}
            <SearchFilter isSearchConfigOpen={isSearchConfigOpen} setIsSearchConfigOpen={setIsSearchConfigOpen} />
        </NavbarB>
    );
};

export default Navbar;
*/


/*import React, { useState, useEffect } from 'react';
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







/* версия 30,04,2024
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
                <Offcanvas show={show} onHide={switchOffCanvas} placement="top">
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

export default Navbar;*/




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


/*
import {React,useState,useEffect} from 'react';
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
                <NavbarB.Offcanvas show={show} placement="top">
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

export default Navbar;

*/