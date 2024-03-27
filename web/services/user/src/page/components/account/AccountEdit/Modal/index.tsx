import React from 'react';
import ModalUI from "@packages/shared/UI_KIT/Modal";
import InputUI from "@packages/shared/UI_KIT/Input";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import Alert from "react-bootstrap/Alert";
import {Routes} from "@packages/shared/routes";
import IForm from "../index";
import {useNavigate} from "react-router-dom";
import IAccount from "../../Account";

interface IProps{
    form:IForm,
    setForm:(value:IForm)=>void,
    setEditMode: (value:boolean)=>void,
    security:boolean,
    setSecurity:(value:boolean)=>void,
    account:IAccount;
}

const ModalAccount: React.FC<IProps> = ({form,setForm,setEditMode,security,setSecurity,account}) => {
    const navigate = useNavigate();

    const emailCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,account:{...form.account, email:event.target.value}} )};
    const newPasswordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,newPassword:event.target.value} )};
    const againNewPasswordCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,againNewPassword:event.target.value} )};

    const EnterPassword = ()=>{
        if(!form.account.email ||!form.newPassword || !form.againNewPassword)return setForm({...form, error:3});
        if(form.newPassword!==form.againNewPassword)return setForm({...form, error:2});
        // запрос на сервер
        setEditMode(false);
        navigate(Routes.userRoutes.code);
    }

    return (
        <ModalUI show={security} onHide={()=>setSecurity(false)} title={"Изменение пароля"} type={"not_media"}>
            <InputUI callback={(e)=>emailCallback(e)} label={"Ваша почта"} placeholder={"exemple@gmail.com"} type={"email"} value={form.account.email} rows={0}/>
            <InputUI callback={newPasswordCallback} label={"Новый пароль"} placeholder={"Пароль"} type={"password"} value={form.newPassword} rows={0}/>
            <InputUI callback={againNewPasswordCallback} label={"Повторите новый пароль"} placeholder={"Пароль"} type={"password"} value={form.againNewPassword} rows={0}/>
            <div className={"d-flex justify-content-center align-content-center p-3"}>
                <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2 " variant={"primary"} callback={EnterPassword}>Изменить</ButtonUI>
            </div>
            {form.error===2 ?
                <div className={"mb-3 w-100"}>
                    <Alert variant={"danger"} className={"text-center"}>
                        Пароли не совпадают!
                    </Alert>
                </div>
                : null
            }
            {form.error===3 ?
                <div className={"mb-3 w-100"}>
                    <Alert variant={"danger"} className={"text-center"}>
                        Не заполнены поля!!!
                    </Alert>
                </div>
                : null
            }
        </ModalUI>
    );
};

export default ModalAccount;