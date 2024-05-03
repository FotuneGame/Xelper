import React, { useState, useCallback } from 'react';
import styles from "./Event.module.scss";
import CarouselDefaultUI from '@packages/shared/UI_KIT/Carousel/Default';
import { Link } from 'react-router-dom';
// Для примера
import { ExempleUtils } from "@packages/shared/utils/ExempleUtils";
// Пример загрузки статики
import foto1JPG from "../../../assets/11.jpg";
import foto2JPG from "../../../assets/22.jpg";

const Event = () => {
    ExempleUtils();

    // Для Search
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const search = (value: string) => alert("search: " + value);

    return (
        <div className={styles.container}>
            <div className={styles.eventCards}>
                <div className={`card text-black ${styles.eventCard}`}>
                    <img src={foto1JPG} className={`card-img ${styles.eventImage}`} style={{ height: '100px' }} alt="Event" />
                    <div className="card-img-overlay">
                        <h5 className="card-title text-white"> Комиссия по высшей математике</h5>
                        <p className="card-text text-white"> Коммиссия</p>
                    </div>
                </div>
            </div>

            <div className={`card mb-3 ${styles.eventCard}`} style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-8"> {/* Изменено значение с 4 на 8 */}
                        <div className="card-body">
                            <h5 className="card-title">Название мероприятия</h5>
                            <p className="card-text">Дата: 01.01.2023</p>
                            <p className="card-text">Количество человек: 100</p>
                            <p className="card-text">Место проведения: Москва</p>
                        </div>
                    </div>
                    <div className="col-md-4"> {/* Изменено значение с 8 на 4 */}
                        <img src={foto2JPG} className={`card-img ${styles.eventImage}`} alt="Event" />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <button className="btn btn-primary">Участвовать</button>
                <button className="btn btn-secondary">Помочь</button>
            </div>


            <div className="card mb-3" >
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Название мероприятия</h5>
                            <p className="card-text">Дата: 01.01.2023</p>
                            <p className="card-text">Количество человек: 100</p>
                            <p className="card-text">Место проведения: Москва</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={foto2JPG} className={`card-img ${styles.eventImage}`} alt="Event" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Event;




/*
import React from 'react';
import "./Event.module.scss";
import { useParams } from "react-router-dom";
const Event = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    return (
        <div>
            <h1>страница события {id} (mfe event)</h1>
        </div>
    );
};

export default Event;*/