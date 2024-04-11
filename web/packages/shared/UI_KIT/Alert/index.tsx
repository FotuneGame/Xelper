import React, {useCallback, useState} from 'react';
import {Alert} from "react-bootstrap";

interface IProps{
    type: "danger" | "warning" | "success"| undefined,
    label:string,
    children: string | React.ReactNode,
}

const AlertUI: React.FC<IProps> = React.memo(({type,label,children}) => {
    const [show, setShow] = useState<boolean>(true);
    const close = useCallback(() => setShow(false),[show])
    switch (type){
        case "danger":
            return (
                <Alert  variant={"danger"} label={label} onClose={close} dismissible>
                    <Alert.Heading>{label}</Alert.Heading>
                    {children}
                </Alert>
            );
        case "warning":
            return (
                <Alert  variant={"warning"} onClose={close} dismissible>
                    <Alert.Heading>{label}</Alert.Heading>
                    {children}
                </Alert>
            );
        case "success":
            return (
                <Alert  variant={"success"} onClose={close} dismissible>
                    <Alert.Heading>{label}</Alert.Heading>
                    {children}
                </Alert>
            );
        default:
            return (
                <Alert  variant={"light"} onClose={close} dismissible>
                    <Alert.Heading>{label}</Alert.Heading>
                    {children}
                </Alert>
            );
    }
});

export default AlertUI;