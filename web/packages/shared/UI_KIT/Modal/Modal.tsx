import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ModalProps {
    show: boolean;
    onHide: () => void; // Явно указываем тип для onHide
    title: string;
    body: string | React.ReactNode; // Мы также можем принимать React-элементы в качестве содержимого
}

const MyModal: React.FC<ModalProps> = ({ show, onHide, title, body }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyModal;