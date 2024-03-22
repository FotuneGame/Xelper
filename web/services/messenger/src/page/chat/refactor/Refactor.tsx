import React from 'react';
import "./Refactor.module.scss";
import {useParams} from "react-router-dom";

const Refactor = () => {
    const params = useParams();
    const id_chat = Number(params.id_chat) || 1;

    return (
        <div>
            Страница изменения состояния  чата c id {id_chat} (mfe messenger)
        </div>
    );
};

export default Refactor;