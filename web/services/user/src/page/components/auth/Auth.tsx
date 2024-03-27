import React, {useState} from 'react';
import "./Auth.module.scss";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ButtonUI from "@packages/shared/UI_KIT/Button";
import InputUI from "@packages/shared/UI_KIT/Input";
import {NavLink, useNavigate} from "react-router-dom";
import {Routes} from "@packages/shared/routes";

interface IForm{
    email:string,
    password:string,
    saveMe:boolean,
    error:number,
}

const Auth = () => {

    const navigate = useNavigate();
    const [form,setForm] = useState<IForm>({
        email:"",
        password:"",
        saveMe: false,
        error:0,
    })

    const emailCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, email:event.target.value,})};
    const passwordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, password:event.target.value,})};
    const saveMeCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, saveMe:event.target.checked,})};

    const Enter = ()=>{
        if(!form.email)return setForm({...form, error:1,});
        if(!form.password)return setForm({...form, error:2,});
        console.log(form);
        // запрос на сервер
        if (form)
            localStorage.setItem("auth", "jwt");
        else
            sessionStorage.setItem("auth", "jwt");
        navigate(Routes.eventRoutes.main);
    }

    return (
        <div className={"container w-100 h-100 d-flex justify-content-center align-content-center"}>
            <Form className={"w-50"}>
                <Form.Label className={"w-100"}>
                    <h2>Вход в систему</h2>
                </Form.Label>
                <Form.Group className="mb-3">
                    <InputUI callback={emailCallback} label={"Ваша почта"} placeholder={"exemple@gmail.com"} type={"email"} value={form.email} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={passwordCallback} label={"Пароль"} placeholder={"Пароль"} type={"password"} value={form.password} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запомнить меня" checked={form.saveMe} onChange={(e)=>saveMeCallback(e)}/>
                </Form.Group>

                <Form.Group className="nav mb-3 d-grid justify-content-center d-lg-flex justify-content-lg-between" controlId="formBasicCheckbox">
                    <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.forget}>Забыли пароль</NavLink>
                    <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.registration}>Зарегистрироваться</NavLink>
                    <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"primary"} callback={Enter}>Войти</ButtonUI>
                </Form.Group>

                {form.error===1 ?
                    <Form.Group className={"mb-3 w-100"}>
                        <Alert variant={"danger"} className={"text-center"}>
                            Не верно введена почта!
                        </Alert>
                    </Form.Group>
                    : null
                }
                {form.error===2 ?
                    <Form.Group className={"mb-3 w-100"}>
                        <Alert variant={"danger"} className={"text-center"}>
                            Не верно введён пароль!
                        </Alert>
                    </Form.Group>
                    : null
                }
            </Form>
        </div>
    );
};

export default Auth;