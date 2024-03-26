import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import style from "./ContentNavbar.module.scss";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import {React} from "react";

import Ava from "../../../assets/1.jpg";

interface IProps{
    auth:boolean,
    setAuth:(value:boolean)=>void,
}

const ContentNavbar: React.FC<IProps> = ({auth,setAuth}) =>{
    if(auth){
        return (
            <div className="w-100 h-100 d-grid justify-content-center">
                <Nav variant="underline" className="align-self-start">
                    <div className="my-2 d-grid d-lg-flex justify-content-center">
                        <NavLink className="mx-auto mx-lg-1 my-lg-auto my-2 text-decoration-none text-black" to={Routes.userRoutes.account+"/"+1}>
                            <strong className={"mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black"}>Логин</strong>
                        </NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-lg-auto my-2 text-decoration-none text-black" to={Routes.userRoutes.account+"/"+1}>
                            <img src={Ava} alt="Avatar" className={["rounded-circle", style.avatar].join(" ")}/>
                        </NavLink>
                    </div>
                    <Nav.Item>
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.eventRoutes.main}>Мероприятия</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.messengerRoutes.main}>Мессенджер</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.shortsRoutes.main}>Шортсы</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.aboutRoutes.main}>О нас</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="my-2 d-grid d-lg-flex justify-content-center align-self-end">
                    <ButtonUI className={"mx-auto mx-lg-2 my-lg-auto my-2"} variant={"danger"} callback={()=>setAuth(false)}>
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
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.eventRoutes.main}>Мероприятия</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.shortsRoutes.main}>Шортсы</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="mx-auto mx-lg-2 my-lg-auto my-2 text-center">
                            <NavLink className="text-black text-decoration-none" to={Routes.aboutRoutes.main}>О нас</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="my-2 d-flex justify-content-center align-self-end">
                    <ButtonUI className={"my-lg-auto my-2"} variant={"primary"} callback={()=>setAuth(true)}>
                        <NavLink className="text-white text-decoration-none" to={Routes.userRoutes.authorization}>Войти</NavLink>
                    </ButtonUI>
                </div>
            </div>
        );
    }
}

export default ContentNavbar;