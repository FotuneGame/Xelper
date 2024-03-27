import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

//потом поле заменить на img:string
import Ava from "../../../assets/1.jpg"
import AccountDefault from "./AccountDefault";
import AccountEdit from "./AccountEdit";

interface IAccount{
    img:string,
    email:string,
    login:string,
    firstName:string,
    lastName:string,
    middleName:string,
    placeLive:string,
    events:Array<number>,
}
export default IAccount;

const Account = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    const [account,setAccount] = useState<IAccount>({
        img:Ava,
        email:"exemple@gmail.com",
        login:"Master login",
        firstName:"Иван",
        lastName:"Иванов",
        middleName:"Иванович",
        placeLive:"Город москва",
        events:[1,2],
    });

    //флаг что пользователь на своей странице
    const [currentAccount,setCurrentAccount] = useState<boolean>(true);
    const [editMode,setEditMode] = useState<boolean>(false);

    return (
        <Container className={"w-100 h-100"}>
            {editMode ?
                <AccountEdit account={account} setAccount={setAccount} setEditMode={setEditMode} currentAccount={currentAccount}/>
                :
                <AccountDefault account={account} setEditMode={setEditMode} currentAccount={currentAccount}/>
            }
            <Container className={"w-100 h-100 d-flex justify-content-center align-content-center pt-3"}>
                    Тут будут карточки мероприятий этого пользователя
            </Container>
        </Container>
    );
};

export default Account;