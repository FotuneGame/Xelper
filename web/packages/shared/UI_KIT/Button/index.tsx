import React from 'react';
import "./Button.module.scss";
import {Button} from "react-bootstrap";

interface IProps {
    variant:string,
    callback: () => void,
    children: string | React.ReactNode,
    className: string,
}

const ButtonUI: React.FC<IProps> = ({variant,callback,children,className}) => {
    return (
        <Button className={className} variant={variant} onClick={callback}>
            {children}
        </Button>
    );
};

export default ButtonUI;