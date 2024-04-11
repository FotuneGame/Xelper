import React from 'react';
import {Form} from "react-bootstrap";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
    placeholder:string,
    rows:number,
}

const Textarea: React.FC<IProps> = ({callback,label,value,placeholder,rows}) => {
    return (
        <Form>
            <Form.Label>{label}</Form.Label>
            <Form.Control as={"textarea"} rows={rows} placeholder={placeholder} onChange={(e)=>callback(e)} value={value}/>
        </Form>
    );
};

export default Textarea;