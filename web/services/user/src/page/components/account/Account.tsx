import React from 'react';
import "./Account.module.scss";
import {useParams} from "react-router-dom";

const Account = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    return (
        <div>
            Страница аккаунта c id {id} (mfe user)
        </div>
    );
};

export default Account;