import {React,useState} from 'react';
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import {Navbar as NavbarB, Container, Nav} from "react-bootstrap";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import {FaBars} from "react-icons/fa"

import Ava from "../../assets/1.jpg";

const Navbar = () => {
    const [auth,setAuth] = useState<boolean>(false);
    const ContentNavbar = () =>{
        if(auth){
            return (
                <div className="w-100 d-grid justify-content-center d-lg-flex justify-content-lg-between align-content-center">
                    <Nav>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.eventRoutes.main}>Мероприятия</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.messengerRoutes.main}>Мессенджер</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.shortsRoutes.main}>Шортсы</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.aboutRoutes.main}> О нас</NavLink>
                    </Nav>
                    <div className="my-2 d-grid d-lg-flex justify-content-center justify-content-lg-end">
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.userRoutes.account+"/"+1}>
                            <img src={Ava} alt="Avatar" className={["rounded-circle", style.avatar].join(" ")}/>
                        </NavLink>
                        <ButtonUI className={"mx-auto mx-lg-2 my-lg-auto my-2"} variant={"danger"} callback={()=>setAuth(false)}>
                            <NavLink className="text-white text-decoration-none" to={Routes.eventRoutes.main}>Выход</NavLink>
                        </ButtonUI>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="w-100 d-grid justify-content-center d-lg-flex justify-content-lg-between align-content-center">
                    <Nav>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.eventRoutes.main}>Мероприятия</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.aboutRoutes.main}> О нас</NavLink>
                    </Nav>
                    <div className="my-2 d-flex justify-content-center justify-content-lg-end">
                        <ButtonUI className={"my-lg-auto my-2"} variant={"primary"} callback={()=>setAuth(true)}>
                            <NavLink className="text-white text-decoration-none" to={Routes.userRoutes.authorization}>Войти</NavLink>
                        </ButtonUI>
                    </div>
                </div>
            );
        }
    }

    return (
        <NavbarB collapseOnSelect expand='lg' className={["bg-white shadow fixed-top z-3",style.navbar].join(" ")}>
            <Container className="mx-auto px-0">
                <NavbarB.Brand >
                    <NavLink className="text-decoration-none text-black" to={"/"}>Xelper</NavLink>
                </NavbarB.Brand>
                <NavbarB.Toggle className={"border-0"} aria-controls="list-navbar-nav" ><FaBars size={"1.5rem"}/></NavbarB.Toggle>
                <NavbarB.Collapse id="list-navbar-nav">
                    <ContentNavbar/>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    );
};

export default Navbar;