import React from 'react';
import "./CardUser.module.scss";

interface CardUserProps {
    name: string;
    phoneNumber: string;
    email: string;
}

const CardUser: React.FC<CardUserProps> = ({ name, phoneNumber, email }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Телефон: {phoneNumber}</p>
                <p className="card-text">Email: {email}</p>
            </div>
        </div>
    );
};

export default CardUser;