import React from 'react';
import "./Chat.module.scss";
import {useParams} from "react-router-dom";

const Chat = () => {
    const params = useParams();
    const id_chat = Number(params.id_chat) || 1;
    return (
        <div>
            Страница чата c id {id_chat} (mfe messenger)
        </div>
    );
};

export default Chat;