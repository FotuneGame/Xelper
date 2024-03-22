import React from 'react';
import "./Event.module.scss";
import {useParams} from "react-router-dom";


const Event = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    return (
        <div>
            <h1>страница события {id} (mfe event)</h1>
        </div>
    );
};

export default Event;