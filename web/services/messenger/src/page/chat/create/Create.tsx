import React from 'react';
import "./Create.module.scss";
import {useParams} from "react-router-dom";


const Create = () => {
    const params = useParams();
    const id_chat = Number(params.id_chat) || 1;
    return (
        <div>
            Страница  создания  чата c id {id_chat} (mfe messenger)
        </div>
    );
};

export default Create;