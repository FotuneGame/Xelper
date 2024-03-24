import React from 'react';
import "./Button.module.scss";
import {Button} from "react-bootstrap";

interface IProps {
    variant:string,
    callback: () => void,
    children: string | React.ReactNode,
}

const ButtonUI: React.FC<IProps> = ({variant,callback,children}) => {
    return (
        <Button variant={variant} onClick={callback}>
            {children}
        </Button>
    );
};

export default ButtonUI;