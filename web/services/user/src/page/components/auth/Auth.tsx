import React, {useState} from 'react';
import "./Auth.module.scss";
import {NavLink} from "react-router-dom";
import UserAPI from "@packages/shared/API/UserAPI";
import {Routes} from "@packages/shared/routes";
import {Container, Row} from "react-bootstrap";
import AlertUI from "@packages/shared/UI_KIT/Alert";
import InputUI from "@packages/shared/UI_KIT/Input";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import Promo from "../../../components/Promo";

interface IProps{

}

const Auth: React.FC<IProps> = ({}) => {
    const [error,setError] = useState(false);
    const [state,setState]=useState({
        checkbox: false,
        password:"",
        email:"",
    });
    const changeCheckbox = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,checkbox:event.target.checked});
    const changePassword = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,password:event.target.value});
    const changeEmail = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,email:event.target.value});

    const submit = async ()=>{
        if(!state.password || !state.email) return setError(true);
        const res = await UserAPI.login(state.password,state.email);
        if(!res)return setError(true);

        console.log(res);
        if(state.checkbox)localStorage.setItem("token",res.data.token);
        else sessionStorage.setItem("token",res.data.token);
        window.location.href="/";

        setError(false);
    }


    return (
        <div>
            <Promo label={"Вход в аккаунт"} text={"Заполним информацию для входа в аккаунт"}/>
            <Container className={"w-100 shadow rounded p-3 mb-3"}>
                <Row>
                    {error && <AlertUI type={"danger"} label={"Не удалось зарегистрироваться"}/>}
                    <InputUI type={"email"} label={"Почта"} placeholder={"exemple@gmail.com"} callback={changeEmail}/>
                    <InputUI type={"password"} label={"Пароль"} placeholder={"ваш пароль"} callback={changePassword}/>
                    <InputUI type={"checkbox"} label={"Запомнить меня"} callback={changeCheckbox}/>
                </Row>
                <div className={"d-grid justify-content-center d-md-flex justify-content-md-between mt-3"}>
                    <div className={"d-grid justify-content-center d-md-flex"}>
                        <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.registration}>Зарегистрироваться</NavLink>
                        <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center px-3" to={Routes.userRoutes.forget}>Забыли пароль</NavLink>
                    </div>
                    <ButtonUI type={"agree"} callback={submit}>Войти</ButtonUI>
                </div>
            </Container>
        </div>
    );
};

export default Auth;