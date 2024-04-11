import React, {useState} from 'react';
import style from "./Password.module.scss";
import {Button, Form, InputGroup} from "react-bootstrap";
import EyeOpenSVG from "./SVG/eye-open.svg";
import EyeCloseSVG from "./SVG/eye-close.svg";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
    placeholder:string,
}

const Password: React.FC<IProps> = ({callback,label,value,placeholder}) => {
    const [show,setShow] = useState<boolean>(false);
    return (
        <Form>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control type={show ? "text" : "password" } placeholder={placeholder} onChange={(e)=>callback(e)} value={value}/>
                <Button className={style.button} onClick={()=>setShow(!show)}>
                    {show ? <EyeOpenSVG/> : <EyeCloseSVG />}
                </Button>
            </InputGroup>
        </Form>
    );
};

export default Password;