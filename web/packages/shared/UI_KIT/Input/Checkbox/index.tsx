import React from 'react';
import style from "./Checkbox.module.scss";
import {InputGroup} from "react-bootstrap";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
}

const Checkbox: React.FC<IProps> = ({callback,label,value}) => {
    return (
        <InputGroup className={style.body}>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={(e)=>callback(e)} value={value}/>
            <InputGroup.Text>{label}</InputGroup.Text>
        </InputGroup>
    );
};

export default Checkbox;