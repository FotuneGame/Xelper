import React from 'react';
import "./Refactor.module.scss";
import {useParams} from "react-router-dom";

const Refactor = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    return (
        <div>
            Страница изменения состояния мероприятия c id {id} пользователя (mfe event)
        </div>
    );
};

export default Refactor;