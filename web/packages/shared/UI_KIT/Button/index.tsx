import React from 'react';
import {Button} from "react-bootstrap";
import style from "./Button.module.scss";

interface IProps {
    type:"danger" | "agree" | "neutral",
    callback: () => void,
    children: string | React.ReactNode,
    className: string,
}

const ButtonUI: React.FC<IProps> = React.memo (({type,callback,children,className}) => {
    switch (type){
        case "danger":
            return (<Button className={ [style.danger,style.button,className].join(" ")} onClick={callback}>{children}</Button>);
        case "agree":
            return (<Button className={[style.agree,style.button,className].join(" ")} onClick={callback}>{children}</Button>);
        case "neutral":
            return (<Button className={[style.neutral,style.button,className].join(" ")} onClick={callback}>{children}</Button>);
        default:
            return (<Button className={[style.none,style.button,className].join(" ")} onClick={callback}>{children}</Button>);
    }
});

export default ButtonUI;