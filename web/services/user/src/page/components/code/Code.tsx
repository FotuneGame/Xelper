import React, {useState} from 'react';
import "./Code.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {Routes} from "@packages/shared/routes";
import Form from "react-bootstrap/Form";
import InputUI from "@packages/shared/UI_KIT/Input";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import Alert from "react-bootstrap/Alert";

interface IForm{
    code:string,
    error:number,
}

const Code = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState<IForm>({
        code:"",
        error:0,
    })

    const codeCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, code:event.target.value,})};

    const Enter = ()=>{
        if(!form.code)return setForm({...form, error:1,});
        console.log(form);
        // запрос на сервер о подтверждении
        if(form)
            localStorage.setItem("auth","jwt");
        else
            sessionStorage.setItem("auth","jwt");
        navigate(Routes.eventRoutes.main);
    }

    return (
        <div className={"container w-100 h-100 d-flex justify-content-center align-content-center"}>
            <Form className={"w-50"}>
                <Form.Label className={"w-100"}>
                    <h2>Код подтверждения</h2>
                </Form.Label>
                <Form.Group className="mb-3">
                    <InputUI callback={codeCallback} label={"Код пришёл вам на почту"} placeholder={"Код"} type={"text"} value={form.code} rows={0}/>
                </Form.Group>

                <Form.Group className="nav mb-3 d-grid justify-content-center d-lg-flex justify-content-lg-end" controlId="formBasicCheckbox">
                    <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"primary"} callback={Enter}>Отправить</ButtonUI>
                </Form.Group>

                {form.error===1 ?
                    <Form.Group className={"mb-3 w-100"}>
                        <Alert variant={"danger"} className={"text-center"}>
                            Не верно введён код!
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

export default Code;