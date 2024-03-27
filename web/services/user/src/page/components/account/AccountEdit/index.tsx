import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import style from "../Account.module.scss";
import CarouselUI from "@packages/shared/UI_KIT/Carousel";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import IAccount from "../Account";
import InputUI from "@packages/shared/UI_KIT/Input";
import Alert from "react-bootstrap/Alert";
import ModalAccount from "./Modal";

interface IProps{
    account:IAccount,
    setEditMode: (value:boolean)=>void,
    setAccount:(value:IAccount)=>void,
    currentAccount:boolean,
}

interface IForm{
    account: IAccount,
    file: File,
    newPassword:string,
    againNewPassword:string,
    error:number,
}
export default IForm;

const AccountEdit: React.FC<IProps> = ({account,setEditMode,currentAccount,setAccount}) => {
    const [security,setSecurity] = useState<boolean>(false);
    const [form,setForm] = useState<IForm>({
        account:account,
        file:null,
        newPassword:"",
        againNewPassword: "",
        error:0,
    });

    const loginCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,account:{...form.account, login:event.target.value}} )};
    const firstNameCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,account:{...form.account, firstName:event.target.value}} )};
    const lastNameCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,account:{...form.account, lastName:event.target.value}} )};
    const middleNameCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,account:{...form.account, middleName:event.target.value}} )};
    const placeLiveCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form,account:{...form.account, placeLive:event.target.value}} )};
    const fileCallback = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setForm({...form, file:event.target.files[0]})};

    const EnterEdit = ()=>{
        if(!form.account.login || !form.account.firstName ||  !form.account.lastName || !form.account.middleName  || !form.account.placeLive)
            return setForm({...form, error:1});
        // запрос на сервер
        setAccount({...form.account,email:account.email});
        setEditMode(false);
    }

    if(!currentAccount)return null;
    return (
        <Container className={"w-100 h-100 d-grid justify-content-center d-lg-flex justify-lg-content-between align-content-center"}>
            <ModalAccount form={form} setForm={setForm} setEditMode={setEditMode} security={security} setSecurity={setSecurity} account={account}/>
            <div className={"w-100 w-lg-25"}>
                <div className={["rounded-circle mx-auto mx-lg-0",style.ava].join(" ")}>
                    <div className={["rounded-circle",style.img].join(" ")}>
                        <CarouselUI controls={false} imgs={[account.img]}/>
                    </div>
                </div>
            </div>
            <div className={"w-100 w-lg-75"}>
                <div>
                    {form.error===1 ?
                        <div className={"mb-3 w-100"}>
                            <Alert variant={"danger"} className={"text-center"}>
                                Не все поля заполнены!
                            </Alert>
                        </div>
                    : null}
                    <InputUI callback={(e)=>loginCallback(e)} label={"Логин:"} placeholder={"Логин"} type={"text"} value={form.account.login} rows={0}/>
                    <InputUI callback={(e)=>firstNameCallback(e)} label={"Имя:"} placeholder={"Иван"} type={"text"} value={form.account.firstName} rows={0}/>
                    <InputUI callback={(e)=>lastNameCallback(e)} label={"Фамилия:"} placeholder={"Иванов"} type={"text"} value={form.account.lastName} rows={0}/>
                    <InputUI callback={(e)=>middleNameCallback(e)} label={"Отчество:"} placeholder={"Иванович"} type={"text"} value={form.account.middleName} rows={0}/>
                    <InputUI callback={(e)=>placeLiveCallback(e)} label={"Место Проживания:"} placeholder={"г. Москва"} type={"text"} value={form.account.placeLive} rows={0}/>
                    <InputUI callback={(e)=>fileCallback(e)} label={"Аватарка:"} type={"file"} rows={0}/>
                </div>

                <div className={"d-grid justify-content-center d-lg-flex justify-lg-content-between align-content-center p-3"}>
                    <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"success"} callback={EnterEdit}>Сохранить</ButtonUI>
                    <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"primary"} callback={()=>setEditMode(false)}>Вернуться</ButtonUI>
                    { security ?
                        <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"warning"} callback={()=>setSecurity(false)}>Отмена</ButtonUI>
                        :
                        <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"danger"} callback={()=>setSecurity(true)}>Редактировать пароль</ButtonUI>
                    }
                </div>
            </div>
        </Container>
    );
};

export default AccountEdit;