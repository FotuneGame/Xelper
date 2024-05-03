import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import style from "./ContentNavbar.module.scss";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import {React, useEffect, useState} from "react";

import Ava from "../../../assets/1.jpg";
import userAPI from "@packages/shared/API/UserAPI";

interface IProps{
    auth:boolean,
    exit:()=>void,
    switchOffCanvas: ()=>void,
}

const ContentNavbar: React.FC<IProps> = ({auth,exit,switchOffCanvas}) =>{
    if(auth){
        const [state,setState]=useState({
            username:"",
        });
        const data = async () =>{
            return await userAPI.data(localStorage.getItem("auth") ?? sessionStorage.getItem("auth"));
        }
        useEffect(()=>{
            data().then((res)=>{
                console.log(res);
                setState({...setState,username: res.data.username})
            }).catch((err)=>console.log(err))
        },[auth])
        return (
            <div className="w-100 h-100 d-grid justify-content-center">
                <Nav variant="underline" className="align-self-start">
                    <div className="my-2 d-flex justify-content-center">
                        <NavLink onClick={switchOffCanvas} className="mx-auto mx-lg-1 my-lg-auto my-2 text-decoration-none text-black" to={Routes.userRoutes.account+"/"+1}>
                            <strong className={"mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black"}>Логин</strong>
                        </NavLink>
                        <NavLink onClick={switchOffCanvas} className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.userRoutes.account+"/"+1}>
                            <img src={Ava} alt="Avatar" className={["rounded-circle", style.avatar].join(" ")}/>
                        </NavLink>
                    </div>
                    <Nav.Item>
                        <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.eventRoutes.main}>Мероприятия</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.messengerRoutes.main}>Мессенджер</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.shortsRoutes.main}>Шортсы</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.aboutRoutes.main}>О нас</NavLink>
                    </Nav.Item>
                </Nav>
                <div className="my-2 d-flex justify-content-center align-self-end">
                    <ButtonUI className={"mx-auto mx-lg-2 my-lg-auto my-2"} type={"danger"} callback={exit}>
                        <NavLink className="text-white text-decoration-none" to={Routes.eventRoutes.main}>Выход</NavLink>
                    </ButtonUI>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="w-100 h-100 d-grid justify-content-center">
                <Nav variant="underline" className="align-self-start">
                    <Nav.Item>
                            <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.eventRoutes.main}>Мероприятия</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                            <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.shortsRoutes.main}>Шортсы</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                            <NavLink onClick={switchOffCanvas} className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.aboutRoutes.main}>О нас</NavLink>
                    </Nav.Item>
                </Nav>
                <div className="my-2 d-flex justify-content-center align-self-end">
                    <ButtonUI className={"my-lg-auto my-2"} type={"agree"} callback={switchOffCanvas}>
                        <NavLink className="text-white text-decoration-none" to={Routes.userRoutes.authorization}>Войти</NavLink>
                    </ButtonUI>
                </div>
            </div>
        );
    }
}

export default ContentNavbar;