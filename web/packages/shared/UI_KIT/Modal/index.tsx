import React from 'react';
import style from "./Modal.module.scss";
import { Modal } from 'react-bootstrap';

interface ModalProps {
    show: boolean;
    onHide: () => void; // Явно указываем тип для onHide
    title: string;
    children: string | React.ReactNode; // Мы также можем принимать React-элементы в качестве содержимого
    type: "preview" | "not_preview",
}

const ModalUI: React.FC<ModalProps> = React.memo( ({ show, onHide, title, children ,type}) => {
    if(type==="not_preview"){
        return (
            <Modal className={style.modal} show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        );
    }
    if(type==="preview") {
        if (show) {
            return (
                <Modal className={style.modal}  show={show} onHide={onHide} fullscreen={true}>
                    <Modal.Body className={style.body}>{children}</Modal.Body>
                </Modal>
            );
        } else {
            return (
                <div>
                    {children}
                </div>
            );
        }
    }
});

export default ModalUI;