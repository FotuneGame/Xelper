import React from 'react';
import {ProgressBar} from "react-bootstrap";
import style from "./Progressbar.module.scss";

interface IProps{
    now:number,
    all:number,
    label: string | React.ReactNode,
    type: "money" | "people"
}

const Progressbar:React.FC<IProps> = React.memo(({now,all,type,label}) => {
    switch (type){
        case "money":
            return (<ProgressBar className={style.money} animated now={now} max={all} label={label}/>)
        case "people":
            return (<ProgressBar className={style.people}  animated now={now} max={all} label={label}/>);
        default:
            return (<ProgressBar className={style.default}  animated now={now} max={all} label={label}/>);
    }

});

export default Progressbar;