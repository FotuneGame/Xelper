import React from 'react';
import {Form} from "react-bootstrap";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    value: any,
    placeholder:string,
}

const Time: React.FC<IProps> = ({callback,label,value}) => {
    return (
        <Form>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={"time"} onChange={(e)=>callback(e)} value={value}/>
        </Form>
    );
};

export default Time;