/*
import React from 'react';
import "./Main.module.scss";

const Main = () => {
    return (
        <div>
            Главная страница всех мероприятий (mfe event)
        </div>
    );
};
export default Main;
*/


/*
const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.images}>
                <img src="image1.jpg" alt="Image 1" className={styles.image} />
                <img src="image2.jpg" alt="Image 2" className={styles.image} />
            </div>
            <div className={styles.title}>
                <strong>Главные события дня</strong>
                <br />
                <em>будьте в курсе всех событий и примите участие в них вместе</em>
            </div>
            <div className={styles.description}>
            </div>
        </div>
    );
};
export default Main;
*/

/*
import React from 'react';

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            (prevIndex + 1) % children.length
        );
    };

    return (
        <div className="carousel">
            <button onClick={handlePrev}>Prev</button>
            {React.Children.map(children, (child, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                    {child}
                </div>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

const CarouselItems = () => {
    return (
        <Carousel>
            <div>ВСЕ</div>
            <div>МЕРОПРИЯТИЯ</div>
            <div>ВЕЧЕРИНКИ</div>
            <div>ХАКАТОНЫ</div>
            <div>КОМИССИИ</div>
        </Carousel>
    );
};

export default CarouselItems;*/


/*
import React, { useState } from 'react';
const events = ['Все', 'Мероприятия', 'Вечеринки', 'Благотворительность', 'Хакатоны', 'Коммисии'];
const totalEvents = events.length;
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalEvents);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalEvents) % totalEvents);
    };

    return (
        <div>
            <div>{events[activeIndex]}</div>
            <button onClick={goToPrev}>{'<'}</button>
            <button onClick={goToNext}>{'>'}</button>
        </div>
    );
};

export default Carousel;*/




/* 01,05,2024
import React, { useState, useCallback } from 'react';
import styles from './Main.module.scss';
import CarouselDefaultUI from '@packages/shared/UI_KIT/Carousel/Default';


import { ExempleUtils } from "@packages/shared/utils/ExempleUtils";

import foto1JPG from "../../../assets/11.jpg";
import foto2JPG from "../../../assets/22.jpg";

const About: React.FC = () => {
    ExempleUtils();

    // Для Search
    const [searchSetting, setSearchSetting] = useState<boolean>(false);
    const search = (value: string) => alert("search: " + value);

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.text}>
                    <div>
                        <strong>Главные события дня</strong>
                        <br />
                        <em>будьте в курсе всех событий и примите участие в них вместе</em>
                    </div>
                </div>
                <div className={styles.images} style={{ paddingRight: '50px', textAlign: 'right' }}>
                    <img width={200} height={150} src={foto1JPG} alt={foto1JPG} style={{ marginBottom: '10px' }} />
                    <img width={150} height={120} src={foto2JPG} alt={foto1JPG} style={{ marginLeft: '20px' }} />
                </div>
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
                <div className="mx-3"></div> {}
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
                    <div className="col-md-8"> {}
                        <div className="card-body">
                            <h5 className="card-title">Название мероприятия</h5>
                            <p className="card-text">Дата: 01.01.2023</p>
                            <p className="card-text">Количество человек: 100</p>
                            <p className="card-text">Место проведения: Москва</p>
                        </div>
                    </div>
                    <div className="col-md-4"> {}
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

export default About;




*/


/*import React from 'react';
import "./Main.module.scss";

const Main = () => {
    return (
        <div>
          Главная страница всех мероприятий (mfe event)
        </div>
    );
};

export default Main;*/

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from "./Main.module.scss";
import foto1JPG from "../../../assets/11.jpg";
import foto2JPG from "../../../assets/22.jpg";

function PartialCode(props) {
    return (
        <div className={styles.content_box4}>
            <div className={styles.group}>
                <img className={styles.cover} src={foto1JPG} alt="alt text" />
                <div className={styles.rect4} />
            </div>

            <div className={styles.flex_col}>
                <div className={styles.flex_col1}>
                    <h3 className={styles.subtitle1}>
                        Название мероприятия
                    </h3>
                    <h5 className={styles.highlight}>
                        Хакатоны
                    </h5>
                </div>

                <div className={styles.flex_row}>
                    <div className={styles.flex_row1}>
                        <img className={styles.image} src={'/assets/f669f3d0d13e1da3bfee0eaea7a0eac3.png'} alt="alt text" />
                        <h5 className={styles.highlight1}>
                            19:30 01.01.2024
                        </h5>
                    </div>

                    <div className={styles.flex_row2}>
                        <img className={styles.image1} src={'/assets/16642d139643eb878d876b85e41efa6f.png'} alt="alt text" />
                        <img className={styles.image2} src={'/assets/e9db446ba38d5ba330b35e21ad8055e7.png'} alt="alt text" />
                        <h5 className={styles.highlight11}>
                            700/1000
                        </h5>
                    </div>
                </div>

                <div className={styles.flex_row3}>
                    <img className={styles.image3} src={'/assets/23e1f4d53b78074cab52d7fef16f22ee.png'} alt="alt text" />
                    <h5 className={styles.highlight1}>
                        г. Москва улица Колотушкина дом 88, к. 6, кв 123
                    </h5>
                </div>
            </div>
        </div>
    );
}

PartialCode.propTypes = {};

export default PartialCode;