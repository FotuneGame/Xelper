import React, {useState} from 'react';
import "./Registration.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import Form from "react-bootstrap/Form";
import InputUI from "@packages/shared/UI_KIT/Input";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import Alert from "react-bootstrap/Alert";

interface IForm{
    email:string,
    password:string,
    againPassword:string,
    login:string,
    firstName:string,
    lastName:string,
    middleName:string,
    saveMe:boolean,
    error:number,
}

const Registration = () => {

    const navigate = useNavigate();
    const [form,setForm] = useState<IForm>({
        email:"",
        password:"",
        againPassword:"",
        login:"",
        firstName:"",
        lastName:"",
        middleName:"",
        saveMe: false,
        error:0,
    })

    const emailCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, email:event.target.value,})};
    const passwordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, password:event.target.value,})};
    const againPasswordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, againPassword:event.target.value,})};
    const loginCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, login:event.target.value,})};
    const firstNameCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, firstName:event.target.value,})};
    const lastNameCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, lastName:event.target.value,})};
    const middleNameCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, middleName:event.target.value,})};
    const saveMeCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, saveMe:event.target.checked,})};

    const Enter = ()=>{
        if(!form.email || !form.password || !form.againPassword || !form.login || !form.firstName ||  !form.lastName || !form.middleName)
            return setForm({...form, error:1});
        if(form.password!==form.againPassword) return setForm({...form, error:2});

        console.log(form);
        // запрос на сервер
        navigate(Routes.userRoutes.code);
    }

    return (
        <div className={"container w-100 h-100 d-flex justify-content-center align-content-center"}>
            <Form className={"w-50"}>
                <Form.Label className={"w-100"}>
                    <h2>Регистрация</h2>
                </Form.Label>
                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>emailCallback(e)} label={"Ваша почта"} placeholder={"exemple@gmail.com"} type={"email"} value={form.email} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>passwordCallback(e)} label={"Пароль"} placeholder={"Пароль"} type={"password"} value={form.password} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>againPasswordCallback(e)} label={"Повторить пароль"} placeholder={"Пароль"} type={"password"} value={form.againPassword} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>loginCallback(e)} label={"Логин"} placeholder={"Логин"} type={"text"} value={form.login} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>firstNameCallback(e)} label={"Имя"} placeholder={"Иван"} type={"text"} value={form.firstName} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>lastNameCallback(e)} label={"Фамилия"} placeholder={"Иванов"} type={"text"} value={form.lastName} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={(e)=>middleNameCallback(e)} label={"Отчество"} placeholder={"Иванович"} type={"text"} value={form.middleName} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запомнить меня" checked={form.saveMe} onChange={(e)=>saveMeCallback(e)}/>
                </Form.Group>

                <Form.Group className="nav mb-3 d-grid justify-content-center d-lg-flex justify-content-lg-between" controlId="formBasicCheckbox">
                    <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.forget}>Забыли пароль</NavLink>
                    <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.authorization}>Войти в аккаунт</NavLink>
                    <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"primary"} callback={Enter}>Создать</ButtonUI>
                </Form.Group>

                {form.error===1 ?
                    <Form.Group className={"mb-3 w-100"}>
                        <Alert variant={"danger"} className={"text-center"}>
                            Не все поля заполнены!
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

export default Registration;