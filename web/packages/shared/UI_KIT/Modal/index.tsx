import React from 'react';
import style from "./Modal.module.scss";
import { Modal } from 'react-bootstrap';

interface ModalProps {
    show: boolean;
    onHide: () => void; // Явно указываем тип для onHide
    title: string;
    children: string | React.ReactNode; // Мы также можем принимать React-элементы в качестве содержимого
    type: "media" | "not_media",
}

const ModalUI: React.FC<ModalProps> = ({ show, onHide, title, children ,type}) => {

    if(type==="not_media"){
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        );
    }

    if(type==="media") {
        if (show) {
            return (
                <Modal show={show} onHide={onHide} fullscreen={true}>
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
};

export default ModalUI;