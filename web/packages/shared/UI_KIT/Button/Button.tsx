import React from 'react';
import "./Button.module.scss"; // Если у вас есть стили, вы можете их импортировать, иначе эту строку можно удалить
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap
import  { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface CustomEventModalProps {
    show: boolean;
    handleClose: () => void; 
}

const CustomEventModal: React.FC<CustomEventModalProps> = ({ show, handleClose }) => {
    const [eventName, setEventName] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
    };

    const handleCreateEvent = () => {
        // Здесь можно выполнить действия по созданию пользовательского мероприятия
        console.log('Создано новое мероприятие:', eventName);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Создать свое мероприятие</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="eventName">Название мероприятия</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventName"
                        value={eventName}
                        onChange={handleInputChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleCreateEvent}>
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomEventModal;