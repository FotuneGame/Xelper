import {React,useState} from 'react';
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import {Navbar as NavbarB, Container, Offcanvas} from "react-bootstrap";
import ContentNavbar from './ContentNavbar';
import {FaBars} from "react-icons/fa"



const Navbar = () => {
    const [auth,setAuth] = useState<boolean>(false);


    return (
        <NavbarB collapseOnSelect expand={false} className={["bg-white shadow fixed-top z-3",style.navbar].join(" ")}>
            <Container className="mx-auto px-0">
                <NavbarB.Brand >
                    <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                </NavbarB.Brand>
                <NavbarB.Toggle className={"border-0 d-flex align-content-center"} aria-controls="offcanvasNavbar-expand" >
                    <FaBars size={"1rem"}/>
                </NavbarB.Toggle>
                <NavbarB.Offcanvas id={`offcanvasNavbar-expand`} aria-labelledby={`offcanvasNavbarLabel-expand`} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                            <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ContentNavbar auth={auth} setAuth={setAuth}/>
                    </Offcanvas.Body>
                </NavbarB.Offcanvas>
            </Container>
        </NavbarB>
    );
};

export default Navbar;