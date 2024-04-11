import React, {useRef} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import PlusSVG from "./SVG/plus.svg"
import style from "./File.module.scss";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
}

const File:  React.FC<IProps> = ({callback,label,value}) => {
    const input = useRef(null);
    return (
        <Form>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control ref={input} type={"file"} onChange={(e)=>callback(e)} value={value}/>
                <Button className={style.button} onClick={()=>input.current.click()}>
                    <PlusSVG/>
                </Button>
            </InputGroup>
        </Form>
    );
};

export default File;