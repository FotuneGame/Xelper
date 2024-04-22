import React from 'react';
import "./Event.module.scss";
import {useParams} from "react-router-dom";

/*
interface EventCardProps {
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
    link: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image, date, location, link }) => {
    return (
        <div className={styles.eventCard}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.dateLocation}>
                    <span>{date}</span>
                    <span>{location}</span>
                </div>
                <a href={link} className={styles.link}>Learn more</a>
            </div>
        </div>
    );
};

export default EventCard;
*/


const Event = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    return (
        <div>
            <h1>страница события {id} (mfe event)</h1>
        </div>
    );
};

export default Event;