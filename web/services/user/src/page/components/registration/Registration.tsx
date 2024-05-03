import React, {useState} from 'react';
import Promo from "../../../components/Promo";
import InputUI from "@packages/shared/UI_KIT/Input";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import UserAPI from "@packages/shared/API/UserAPI";
import AlertUI from "@packages/shared/UI_KIT/Alert";
import {NavLink, useNavigate} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import {Container,Row} from "react-bootstrap";




const RegistrationForm = () => {
    const nav = useNavigate();
    const [error,setError] = useState(false);

    const [passwordAgain,setPasswordAgain] = useState<string>("");
    const changePasswordAgain = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPasswordAgain(event.target.value);
    const [state,setState]=useState({
        password:"",
        email:"",
        phone:"",
        surname:"",
        place:"",
    });
    const changePassword = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,password:event.target.value});
    const changeEmail = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,email:event.target.value});
    const changePhone = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,phone:event.target.value});
    const changeSurname= (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,surname:event.target.value});
    const changePlace= (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState({...state,place:event.target.value});

    const submit = async ()=>{
        if(state.password!==passwordAgain || !state.password || !state.email || !state.phone || !state.surname || !state.place) return setError(true);
        const res = await UserAPI.registration(state.password,state.email,state.phone,state.surname,state.place);
        localStorage.setItem("form_reg",JSON.stringify(state));
        if(!res)return setError(true);

        nav(Routes.userRoutes.code);

        setError(false);
    }

    return (
        <div>
            <Promo label={"Регистрация"} text={"Заполним информацию для регистрации аккаунта"}/>
            <Container className={"w-100 shadow rounded p-3 mb-3"}>
                <Row>
                    {error && <AlertUI type={"danger"} label={"Не удалось зарегистрироваться"}/>}
                    <InputUI callback={changeSurname} label={"Text"} placeholder={"Имя"} type={"text"} value={state.surname}/>
                    <InputUI callback={changePassword} label={"Password"} placeholder={"Пароль"} type={"password"} value={state.password}/>
                    <InputUI callback={changePasswordAgain} label={"Password"} placeholder={"Повторите пароль"} type={"password"} value={passwordAgain}/>
                    <InputUI callback={changeEmail} label={"Email"} placeholder={"exemple@email.com"} type={"email"} value={state.email}/>
                    <InputUI callback={changePhone} label={"Phone"} placeholder={"+7 (953) 349-61-09"} type={"phone"} value={state.phone}/>
                    <InputUI callback={changePlace} label={"Text"} placeholder={"Место проживания"} type={"text"} value={state.place}/>
                </Row>
                <div className={"d-grid justify-content-center d-md-flex justify-content-md-between mt-3"}>
                    <div className={"d-grid justify-content-center d-md-flex"}>
                        <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.authorization}>Войти в аккаунт</NavLink>
                        <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center px-3" to={Routes.userRoutes.forget}>Забыли пароль</NavLink>
                    </div>
                    <ButtonUI type={"agree"} callback={submit}>Продолжить</ButtonUI>
                </div>
            </Container>
        </div>
    );
};

export default RegistrationForm;