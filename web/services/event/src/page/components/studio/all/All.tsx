
import "./All.module.scss";

import React, { useState, useCallback } from 'react';
import styles from './All.module.scss';
import CarouselDefaultUI from '@packages/shared/UI_KIT/Carousel/Default';
import { Link } from 'react-router-dom';
// Для примера
import { ExempleUtils } from "@packages/shared/utils/ExempleUtils";
// Пример загрузки статики
import foto1JPG from "../../../../assets/11.jpg";
import foto2JPG from "../../../../assets/22.jpg";

const All = () => {
    ExempleUtils();

    // Для Search
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const search = (value: string) => alert("search: " + value);

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.text}>
                    <div>
                        <strong>Создавай свои события</strong>
                        <br />
                        <em>Будьте организаторомновых событий, мы поможем...</em>
                    </div>
                </div>
                <div className={styles.images} style={{ paddingRight: '50px', textAlign: 'right' }}>
                    <img width={200} height={150} src={foto1JPG} alt={foto1JPG} style={{ marginBottom: '10px' }} />
                    <img width={150} height={120} src={foto2JPG} alt={foto1JPG} style={{ marginLeft: '20px' }} />
                </div>
            </div>


            <div className="float-end">
                <p style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }}>Ваши мероприятия</p>
                <Link to="/events/studio/create" className="btn btn-success btn-sm" style={{ width: '75px', height: '25px', verticalAlign: 'middle', float: 'right', backgroundColor: '#89a497' }}>Создать</Link>
            </div>



            <div className={styles.carousel}>
                <CarouselDefaultUI label={" "} array={[
                    <p>Все</p>,
                    <p>Благотворительность</p>,
                    <p>Вечеринки</p>,
                    <p>Хакатоны</p>,
                    <p>Комиссии</p>,
                    <p>Мероприятия</p>,
                ]} />
            </div>

            <div className={styles.eventCards}>
                <div className={`card text-black ${styles.eventCard}`}>
                    <img src={foto1JPG} className={`card-img ${styles.eventImage}`} alt="Event" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Название мероприятия</h5>
                        <p className="card-text">Дата: 01.01.2023</p>
                        <p className="card-text">Количество человек: 100</p>
                        <p className="card-text">Место проведения: Москва</p>
                    </div>
                </div>
                <div className="mx-3"></div> {/* Отступ между карточками */}
                <div className={`card text-black ${styles.eventCard}`}>
                    <img src={foto2JPG} className={`card-img ${styles.eventImage}`} alt="Event" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Название мероприятия</h5>
                        <p className="card-text">Дата: 01.01.2023</p>
                        <p className="card-text">Количество человек: 100</p>
                        <p className="card-text">Место проведения: Москва</p>
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

export default All;





/*import React from 'react';
import "./All.module.scss";

const All = () => {
    return (
        <div>
            Страница студии всех мероприятий пользователя (mfe event)
        </div>
    );
};

export default All;*/