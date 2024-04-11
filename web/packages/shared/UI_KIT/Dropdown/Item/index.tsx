import React from 'react';
import style from "./Item.module.scss";

interface IProps{
    text:string
    callback:(value:string)=>void,
    active: boolean,
}

const Item: React.FC<IProps> = ({text,callback,active}) => {

    const classNameNow=style.item;
    if(active)classNameNow+=" "+style.active;
    return (
        <li onClick={()=>callback(text)} className={classNameNow}>
            {text}
        </li>
    );
};

export default Item;