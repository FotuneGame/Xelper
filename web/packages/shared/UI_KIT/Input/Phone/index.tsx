import React from 'react';
import {Form} from "react-bootstrap";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
    placeholder:string,
}

const Phone: React.FC<IProps> = ({callback,label,value,placeholder}) => {
    return (
        <Form>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={"phone"} placeholder={placeholder} onChange={(e)=>callback(e)} value={value}/>
        </Form>
    );
};

export default Phone;