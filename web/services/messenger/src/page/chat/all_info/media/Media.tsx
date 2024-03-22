import React from 'react';
import "./Media.module.scss";
import {useParams} from "react-router-dom";

const Media = () => {
    const params = useParams();
    const id_chat = Number(params.id_chat) || 1;
    return (
        <div>
            Страница просмотра медиа файлов чата c id {id_chat} (mfe messenger)
        </div>
    );
};

export default Media;