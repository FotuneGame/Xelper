import React, { useState, useCallback } from 'react';
import styles from './Refactor.module.scss';
import InputUI from '@packages/shared/UI_KIT/Input';
import Map from "@packages/shared/UI_KIT/Map";
import { Link } from 'react-router-dom';
import foto1JPG from "../../../../assets/11.jpg";
import foto2JPG from "../../../../assets/22.jpg";



const Create: React.FC = () => {
    const eventName = 'Название события';
    const eventAddressOptions = ['Ад', 'Военмех', 'Рай'];
    const eventCategoryOptions = ['Благотворительность', 'Вечеринки', 'Хакатоны', 'Комиссия', 'Мероприятия'];
    const eventDescription = 'Описание события';


    const [videoFiles, setVideoFiles] = useState([]);
    const [address, setAddress] = useState(eventAddressOptions[0]);
    const [category, setCategory] = useState(eventCategoryOptions[3]);
    const [attendees, setAttendees] = useState('4');
    const [comments, setComments] = useState('Свадьба тараканов');
    const [boostyInput, setBoostyInput] = useState('');
    const [fileInputValue, setFileInputValue] = useState('');
    const [videoInputValue, setVideoInputValue] = useState('');

    const [inputText, setInputText] = useState('Защита проекта');

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


    const [timeValue, setTimeValue] = useState<string>("12:40");
    const changeTimeValue = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTimeValue(event.target.value);
    }, [timeValue]);
    const [dateValue, setDateValue] = useState<string>("2024-05-03");
    const changeDateValue = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDateValue(event.target.value);
    }, [dateValue]);


    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileInputValue(event.target.value);
    };

    const handleVideoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVideoInputValue(event.target.value);
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setVideoFiles(selectedFiles);
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.text}>
                    <div style={{ marginTop: '10px' }}>
                        <strong>{"Так-с надо что-то поменять"}</strong>
                        <br />
                        <em>Каждое событие начинается с опечатки?</em>
                    </div>
                </div>
                <div className={styles.images} style={{ paddingRight: '50px', textAlign: 'right' }}>
                    <img width={200} height={150} src={foto1JPG} alt={foto1JPG} style={{ marginBottom: '10px' }} />
                    <img width={150} height={120} src={foto2JPG} alt={foto1JPG} style={{ marginLeft: '20px' }} />
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>

                <div>Изменим название мероприятия</div>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Название события..."
                />


                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px' }}>Категория:</span>
                    <select value={category} onChange={handleCategoryChange}>
                        {eventCategoryOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>



                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Адрес:</span>
                    <select value={address} onChange={handleAddressChange}>
                        {eventAddressOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>


                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Выберем дату и время:</span>
                    <InputUI callback={changeTimeValue} placeholder={"пиши текст"} type={"time"} value={timeValue} />
                    <InputUI callback={changeDateValue} placeholder={"пиши текст"} type={"date"} value={dateValue} />
                </div>


                <div style={{ marginTop: '20px' }}>
                    <div style={{ marginBottom: '10px' }}>Описание:</div>
                    <div>{eventDescription}</div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>Количество участников:</span>
                        <input type="number" value={attendees} onChange={handleAttendeesChange} />
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ marginBottom: '10px' }}>Комментарии:</div>
                    <textarea value={comments} onChange={handleCommentsChange} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <span style={{
                            marginRight: '10px'
                        }}>Ссылка на Boosty: </span>
                        <input type="text" placeholder="(Необязательно поле)" value={boostyInput} onChange={handleBoostyInputChange} />
                    </div>
                </div>


                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>Добавить фото:</div>
                        <input type="file" onChange={handleFileInputChange} accept="image/*" multiple />
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>Добавить видео:</div>
                        <input type="file" onChange={handleVideoInputChange} />

                    </div>
                    <div>{videoInputValue}</div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>Добавить главное фото:</div>
                        <input type="file" onChange={handleFileInputChange} />
                    </div>
                </div>


                <div style={{ flex: 1 }}>
                    <input type="file" accept="video/*" multiple onChange={handleFileChange} />
                </div>
                <div style={{ flex: 1, overflowY: 'auto', maxHeight: '400px' }}>
                    {videoFiles.map((file, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <video controls width="200">
                                <source src={URL.createObjectURL(file)} type="video/mp4" />
                            </video>
                        </div>
                    ))}
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <div className={`card mb-3 ${styles.eventCard}`} style={{ maxWidth: "540px" }}>
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
                            <img src={foto2JPG} className={`card-img ${styles.eventImage}`} alt="Event" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <Link to="/events/studio/all" className="btn btn-sm text-white d-inline-flex justify-content-center align-items-center" style={{ backgroundColor: '#A54A40', marginRight: '10px', width: '75px', height: '25px' }}>Удалить</Link>
                    <Link to="/events/studio/all" className="btn btn-sm text-white d-inline-flex justify-content-center align-items-center" style={{ backgroundColor: '#3D3D3D', marginRight: '10px', width: '75px', height: '25px' }}>Отмена</Link>
                    <Link to="/events/studio/all" className="btn btn-sm text-white d-inline-flex justify-content-center align-items-center" style={{ backgroundColor: '#89A497', width: '75px', height: '25px' }}>Создать</Link>
                </div>
            </div>
        </div>
    );
};

export default Create;



/*import React from 'react';
import "./Refactor.module.scss";
import {useParams} from "react-router-dom";

const Refactor = () => {
    const params = useParams();
    const id = Number(params.id) || 1;

    return (
        <div>
            Страница изменения состояния мероприятия c id {id} пользователя (mfe event)
        </div>
    );
};

export default Refactor;*/