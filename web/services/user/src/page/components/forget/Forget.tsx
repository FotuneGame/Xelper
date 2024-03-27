import React, {useState} from 'react';
import "./Forget.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import Form from "react-bootstrap/Form";
import InputUI from "@packages/shared/UI_KIT/Input";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import Alert from "react-bootstrap/Alert";

interface IForm{
    email:string,
    newPassword:string,
    againNewPassword:string,
    error:number,
}

const Forget = () => {

    const navigate = useNavigate();
    const [form,setForm] = useState<IForm>({
        email:"",
        newPassword:"",
        againNewPassword: "",
        error:0,
    })

    const emailCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, email:event.target.value,})};
    const newPasswordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, newPassword:event.target.value,})};
    const againNewPasswordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, againNewPassword:event.target.value,})};

    const Enter = ()=>{
        if(!form.email) return  setForm({...form, error:1,});
        if(!form.newPassword || !form.againNewPassword)return setForm({...form, error:2,});
        if(form.newPassword!==form.againNewPassword)return setForm({...form, error:2,});
        console.log(form);
        // запрос на сервер о сбросе пароля
        navigate(Routes.userRoutes.code);
    }

    return (
        <div className={"container w-100 h-100 d-flex justify-content-center align-content-center"}>
            <Form className={"w-50"}>
                <Form.Label className={"w-100"}>
                    <h2>Востановление пароля</h2>
                </Form.Label>
                <Form.Group className="mb-3">
                    <InputUI callback={emailCallback} label={"Ваша почта"} placeholder={"exemple@gmail.com"} type={"email"} value={form.email} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={newPasswordCallback} label={"Новый пароль"} placeholder={"Пароль"} type={"password"} value={form.newPassword} rows={0}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputUI callback={againNewPasswordCallback} label={"Повторите новый пароль"} placeholder={"Пароль"} type={"password"} value={form.againNewPassword} rows={0}/>
                </Form.Group>

                <Form.Group className="nav mb-3 d-grid justify-content-center d-lg-flex justify-content-lg-between" controlId="formBasicCheckbox">
                    <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.authorization}>Войти в аккаункт</NavLink>
                    <NavLink className="nav-link mx-auto mx-lg-2 my-lg-auto my-2 text-center" to={Routes.userRoutes.registration}>Зарегистрироваться</NavLink>
                    <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"primary"} callback={Enter}>Отправить</ButtonUI>
                </Form.Group>

                {form.error===1 ?
                    <Form.Group className={"mb-3 w-100"}>
                        <Alert variant={"danger"} className={"text-center"}>
                            Нет такой почты или она введена не корректно!
                        </Alert>
                    </Form.Group>
                    : null
                }
                {form.error===2 ?
                    <Form.Group className={"mb-3 w-100"}>
                        <Alert variant={"danger"} className={"text-center"}>
                            Пароли не совпадают!
                        </Alert>
                    </Form.Group>
                    : null
                }
            </Form>
        </div>
    );
};

export default Forget;