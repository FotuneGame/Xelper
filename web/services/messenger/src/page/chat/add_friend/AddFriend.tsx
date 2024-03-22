import React from 'react';
import "./AddFriend.module.scss";
import {useParams} from "react-router-dom";

const AddFriend = () => {
    const params = useParams();
    const id_chat = Number(params.id_chat) || 1;
    return (
        <div>
            Страница добавления друзей чата c id {id_chat} (mfe messenger)
        </div>
    );
};

export default AddFriend;