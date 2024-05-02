import React, { useState, useCallback } from 'react';
import styles from './Create.module.scss';
import { Link } from 'react-router-dom';
import InputUI from '@packages/shared/UI_KIT/Input';
import Map from "@packages/shared/UI_KIT/Map";
import { FiUpload, FiTrash } from "react-icons/fi";
import CarouselMediaUI from "@packages/shared/UI_KIT/Carousel/Media";

import foto1JPG from "../../../../assets/11.jpg";
import foto2JPG from "../../../../assets/22.jpg";



const Create: React.FC = () => {
    const eventName = 'Название события';
    const eventAddressOptions = ['Адрес мероприятия 1', 'Адрес мероприятия 2', 'Адрес мероприятия 3'];
    const eventCategoryOptions = ['Благотворительность', 'Вечеринки', 'Хакатоны', 'Комиссии', 'Мероприятиe'];
    const eventDescription = 'Описание события';


    const [videoFiles, setVideoFiles] = useState([]);
    const [address, setAddress] = useState(eventAddressOptions[0]);
    const [category, setCategory] = useState(eventCategoryOptions[0]);
    const [attendees, setAttendees] = useState('');
    const [comments, setComments] = useState('');
    const [boostyInput, setBoostyInput] = useState('');
    const [fileInputValue, setFileInputValue] = useState('');
    const [videoInputValue, setVideoInputValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const [inputText, setInputText] = useState('');

    const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAddress(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleAttendeesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttendees(event.target.value);
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(event.target.value);
    };

    const handleBoostyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBoostyInput(event.target.value);
    };


    const [timeValue, setTimeValue] = useState<string>("");
    const changeTimeValue = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTimeValue(event.target.value);
    }, [timeValue]);
    const [dateValue, setDateValue] = useState<string>("");
    const changeDateValue = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDateValue(event.target.value);
    }, [dateValue]);


    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleVideoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVideoInputValue(event.target.value);
    };

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setVideoFiles(Array.from(files));
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleReplaceClick = (event) => {
        const newFile = event.target.files[0];
        if (newFile) {
            const updatedImgs = [newFile, ...imgs.slice(1)];
            setImgs(updatedImgs);
        }
    };

    const handleDeleteClick = (event) => {
        const updatedImgs = imgs.slice(1);
        setImgs(updatedImgs);
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.text}>
                    <div style={{ marginTop: '10px' }}>
                        <strong>{"Давай заполним поля"}</strong>
                        <br />
                        <em>Каждое событие начинается с чего-то простого...</em>
                    </div>
                </div>
                <div className={styles.images} style={{ paddingRight: '50px', textAlign: 'right' }}>
                    <img width={200} height={150} src={foto1JPG} alt={foto1JPG} style={{ marginBottom: '10px' }} />
                    <img width={150} height={120} src={foto2JPG} alt={foto1JPG} style={{ marginLeft: '20px' }} />
                </div>
            </div>

            <div style={{ width: '100%', height: '1px', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)' }}></div>

            <div style={{ marginTop: '20px' }}>

                <div className={styles.box} style={{ width: '100%' }}>
                    <div style={{ marginBottom: '60px' }}>
                        <span>Заполнение названия мероприятия</span>
                    </div>
                    <input
                        type="text"
                        value={inputText}
                        style={{ width: '100%' }}
                        onChange={handleInputChange}
                        placeholder="Название события..."
                    />
                </div>

                <div className={styles.box} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ marginBottom: '60px' }}>
                            <span>Выбор категории</span>
                        </div>  
                    </div>
                    <select style={{ backgroundColor: '#89a497', color: '#fff', width: '50%'  }} value={category} onChange={handleCategoryChange}>
                        {eventCategoryOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                
                <div className={styles.box} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ marginBottom: '60px' }}>
                            <span>Заполнение адреса</span>
                        </div>
                    </div>
                    <select style={{ backgroundColor: '#89a497', color: '#fff', width: '50%' }} value={address} onChange={handleAddressChange}>
                        {eventAddressOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.box}>
                    <div style={{ marginBottom: '40px' }}>
                        <span>Выбор даты и времени</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <InputUI callback={changeDateValue} placeholder={"пиши текст"} type={"date"} value={dateValue} />
                        <div style={{ marginRight: '20px' }}></div>
                        <InputUI callback={changeTimeValue} placeholder={"пиши текст"} type={"time"} value={timeValue} />
                    </div>
                </div>

                <div className={styles.box} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ marginBottom: '60px' }}>
                            <span>Количество участников</span>
                        </div>
                    </div>
                    <div style={{ width: '50%' }}>
                        <input type="number" value={attendees} onChange={handleAttendeesChange} />
                    </div>
                </div>

                <div className={styles.box} style={{ width: '100%' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <span>Заполнение описания мероприятия</span>
                    </div>
                    <textarea
                        value={comments} onChange={handleCommentsChange} placeholder="Описание события..."
                        style={{ width: '100%', height: '60%', whiteSpace: 'pre-wrap' }}
                    />
                </div>


                <div className={styles.box}>
                    <div style={{ marginBottom: '60px' }}>
                        <span>Ссылка на Boosty</span>
                    </div>
                    <input type="text" style={{ width: '100%' }} placeholder="(Необязательное поле)" value={boostyInput} onChange={handleBoostyInputChange} />
                </div>

                <div className={styles.box}>
                    <div style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>Добавить главное фото:</div>
                            <input type="file" onChange={handleFileInputChange} accept="image/*" />
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>Добавить фото:</div>
                            <input type="file" onChange={handleFileInputChange} accept="image/*" multiple />
                        </div>
                    </div>
                </div>                

                <div className={styles.box} style={{ display: 'flex' }}>
                    <div className="custom-container">
                        <div>Добавить видео:</div>
                        <div className="custom-container" style={{ marginTop: '100px', marginLeft: 'auto' }}>
                            <input type="file" accept="video/*" multiple onChange={handleFileChange} />
                        </div>
                    </div>
                    
                    <div className="custom-container" style={{ marginLeft: 'auto' }}>
                       <div className="d-flex justify-content-center">
                            <CarouselMediaUI
                                video={videoFiles.map(file => URL.createObjectURL(file))}
                                poster={""}
                                controls={true}
                                className="custom-carousel"
                            />
                        </div> 
                    </div>
                </div>

                <div style={{ margin: '50px' }}></div>

                <div className="d-flex justify-content-center">
                    <div style={{ marginBottom: '10px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Карточка мероприятия</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className={`card mb-3 ${styles.eventCard} custom-container`} style={{ width: "640px" }}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{inputText || 'Название мероприятия'}</h5>
                                    <p className="card-text">{category}</p>
                                    <p className="card-text">{timeValue || '01:00'} {dateValue || '1918-07-17'}</p>
                                    <p className="card-text">Количество человек: {attendees || '0'}</p>
                                    <p className="card-text">Место проведения: {address}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {selectedFile ? (
                                    <img src={URL.createObjectURL(selectedFile)} className={`card-img ${styles.eventImage}`} />
                                ) : (
                                    <img src={foto1JPG} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <Link to="/events/studio/all" className="btn btn-sm text-white d-inline-flex justify-content-center align-items-center" style={{ backgroundColor: '#A54A40', marginRight: '10px', width: '75px', height: '25px' }}>Отмена</Link>
                        <Link to="/events/studio/all" className="btn btn-sm text-white d-inline-flex justify-content-center align-items-center" style={{ backgroundColor: '#89A497', width: '75px', height: '25px' }}>Создать</Link>
                    </div>
                </div>


            </div>

            
        </div>
    );
};

export default Create;



/*import React, { useState, useCallback } from 'react';
import styles from './Create.module.scss';

import foto1JPG from "../../../../assets/11.jpg";
import foto2JPG from "../../../../assets/22.jpg";

const Create = () => {

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.text}>
                    <div style={{ marginTop: '10px' }}>
                        <strong>Давай заполним поля</strong>
                        <br />
                        <em>Каждое событие начинается с чего-то простого...</em>
                    </div>
                </div>
                <div className={styles.images} style={{ paddingRight: '50px', textAlign: 'right' }}>
                    <img width={200} height={150} src={foto1JPG} alt={foto1JPG} style={{ marginBottom: '10px' }} />
                    <img width={150} height={120} src={foto2JPG} alt={foto1JPG} style={{ marginLeft: '20px' }} />
                </div>
            </div>


        </div>
    );
};

export default Create;*/





/*import React from 'react';
import "./Create.module.scss";

const Create = () => {
    return (
        <div>
            Страница студии создания мероприятия пользователя (mfe event)
        </div>
    );
};

export default Create;*/