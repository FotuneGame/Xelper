import React from 'react';
import "./Users.module.scss";
import {useParams} from "react-router-dom";

const Users = () => {
    const params = useParams();
    const id_chat = Number(params.id_chat) || 1;
    return (
        <div>
            Страница просмотра друзей чата c id {id_chat} (mfe messenger)
        </div>
    );
};

export default Users;