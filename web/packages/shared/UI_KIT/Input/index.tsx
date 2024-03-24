import React from 'react';
import "./Input.module.scss";
import Form from 'react-bootstrap/Form';

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    placeholder: string,
    type: string,
    rows: number,
}

const InputUI : React.FC<IProps> = ({callback,label,placeholder,type,value,rows}) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            {rows === 0?
                <Form.Control type={type} placeholder={placeholder} onChange={(e)=>callback(e)} value={value}/>
                :
                <Form.Control as="textarea" rows={rows} type={type} placeholder={placeholder} onChange={(e)=>callback(e)} value={value}/>
            }
        </Form.Group>
    );
};

export default InputUI;