import React from 'react';
import style from "../Account.module.scss";
import CarouselUI from "@packages/shared/UI_KIT/Carousel";
import ButtonUI from "@packages/shared/UI_KIT/Button";
import {Container} from "react-bootstrap";
import IAccount from "../Account";

interface IProps{
    account:IAccount,
    setEditMode: (value:boolean)=>void;
    currentAccount:boolean,
}

const AccountDefault: React.FC<IProps> = ({account,setEditMode,currentAccount}) => {
    return (
        <Container className={"w-100 h-100 d-grid justify-content-center d-lg-flex justify-lg-content-between align-content-center"}>

            <div className={"w-100 w-lg-25"}>
                <div className={["rounded-circle mx-auto mx-lg-0",style.ava].join(" ")}>
                    <div className={["rounded-circle",style.img].join(" ")}>
                        <CarouselUI controls={false} imgs={[account.img]}/>
                    </div>
                </div>
            </div>
            <div className={"w-100 w-lg-75"}>
                <div>
                    <h2>Логин: {account.login}</h2>
                    <p>Почта: {account.email}</p>
                    <p>Имя: {account.firstName}</p>
                    <p>Фамилия: {account.lastName}</p>
                    <p>Отчество: {account.middleName}</p>
                    <p>Адрес: {account.placeLive}</p>
                </div>
                {currentAccount ?
                    <div className={"d-grid justify-content-center d-lg-flex justify-lg-content-between align-content-center"}>
                        <ButtonUI className="mx-auto mx-lg-2 my-lg-auto my-2" variant={"primary"} callback={()=>setEditMode(true)}>Редактировать</ButtonUI>
                    </div>
                : null}
            </div>
        </Container>
    );
};

export default AccountDefault;