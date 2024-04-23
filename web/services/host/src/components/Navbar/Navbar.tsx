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

export default Navbar;