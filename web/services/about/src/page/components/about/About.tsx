import React, {useState,useCallback} from 'react';
import styles from "./About.module.scss";

//Импорты всех UI_KIT

import ButtonUI from "@packages/shared/UI_KIT/Button";
import CarouselMediaUI from "@packages/shared/UI_KIT/Carousel/Media";
import CarouselDefaultUI from '@packages/shared/UI_KIT/Carousel/Default';
import ErrorCard from '@packages/shared/UI_KIT/ErrorCard';
import InputUI from '@packages/shared/UI_KIT/Input';
import ListUI from '@packages/shared/UI_KIT/List';
import Loading from '@packages/shared/UI_KIT/Loading';
import ModalUI from '@packages/shared/UI_KIT/Modal';
import Search from '@packages/shared/UI_KIT/Search';
import Video from '@packages/shared/UI_KIT/Video';
import DropdownUI from '@packages/shared/UI_KIT/Dropdown';
import Progressbar from "@packages/shared/UI_KIT/Progressbar";
import AlertUI from "@packages/shared/UI_KIT/Alert"
import Pagination from "@packages/shared/UI_KIT/Pagination";
import Map from "@packages/shared/UI_KIT/Map";

//ипорты api
import APIGetTestPost from "@packages/shared/API/test";




//для примера
import {ExempleUtils} from "@packages/shared/utils/ExempleUtils";
//пример загрузки статики
import foto1JPG from "../../../assets/1.jpg";
import foto2PNG from "../../../assets/2.png";
import Foto3SVG from "../../../assets/3.svg";
import MP4 from "../../../assets/video/test.mp4"
import {Link} from "react-router-dom";



const About = () => {
    ExempleUtils();

    //Функции для теста кнопок
    const [count,setCount] = useState<number>(0);
    const increment = useCallback(() => setCount(count + 1),[count]);
    const decrement = useCallback(() => setCount(count - 1), [count]);

    //Функции для dropdown
    const [dropdownValue,setDropdownValue] = useState<string>("");

    // функция для Input - ов
    const [checkbox,setCheckbox] = useState<boolean>(true);
    const changeCheckbox = useCallback ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setCheckbox(event.target.checked);
    },[checkbox]);
    const [inputValue,setInputValue] = useState<string>("");
    const changeName = useCallback ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setInputValue(event.target.value);
    },[inputValue]);
    const [timeValue,setTimeValue] = useState<string>("");
    const changeTimeValue = useCallback ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setTimeValue(event.target.value);
    },[timeValue]);
    const [dateValue,setDateValue] = useState<string>("");
    const changeDateValue = useCallback ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setDateValue(event.target.value);
    },[dateValue]);
    const getFile = useCallback ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        console.log(event.target.files);
    },[]);

    //для Search
    const [searchSetting,setSearchSetting] = useState<boolean>(false);
    const search = (value:string) =>alert("search: "+value);
    const methodSearchHelp = async () =>{
        const res = await APIGetTestPost(5,1);
        res.data = res.data.map((item)=> item.title);
        return res;
    };

    //Для модального окна без media
    const [modal,setModal] = useState<boolean>(false);
    const setModalActive =useCallback(()=>setModal(!modal),[modal]);


    const data = [
        {
            id: 1,
            title: "First Image",
            imageURL: foto1JPG
        },
        {
            id: 2,
            title: "Second Image",
            imageURL: foto2PNG
        }
    ];


    //Функция для пагинации
    const LoadPost = async (page:number) =>{
        const res = await APIGetTestPost(10,page);
        if(!res.data) return null;
        console.log(res)
        res.data = res.data.map((item,index)=>
            (
                <div style={{height:"400px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p className="h-25">{ item.id+"."+index +".  "+ item.title}</p>
                </div>
            )
        )
        return res;
    }

    return (
        <div>
            <section className={styles.section2}>
                <div className={styles.content_box4}>
                    <div className={styles.flex_col}>
                        <div className={styles.flex_col1}>
                            <h1 className={styles.title}>
                                Куда будем расти
                            </h1>
                            <h1 className={styles.title1}>
                                В целом, конечно, убеждённость некоторых оппонентов представляет собой интересный эксперимент проверки направлений прогрессивного развития.
                            </h1>
                        </div>

                        <div className={styles.flex_row}>
                            <h2 className={styles.medium_title1}>
                                1 000 000 человек
                            </h2>
                            <h2 className={styles.medium_title1}>
                                7 000 мероприятий
                            </h2>
                        </div>
                    </div>
                </div>

                <img className={styles.image5} src={'/assets/man_climbing_stairs_to_sky.png'} />
                <img className={styles.image3} src={'/assets/2d6ec488e911ef28ab567e97707eeb96.png'} />
                <img className={styles.image4} src={'/assets/e5a4f67ba7d7a73174e196a6894cad1a.png'}/>

                <div className={styles.group}>
                    <div className={styles.content_box41} style={{ '--src': `url(${'/assets/6922940937d5817fab9b4d812c4f35ee.png'})` }}>
                        <img className={styles.image1} src={'/assets/621bb552190eae58ae35bfebaa0f70a6.png'} alt="alt text" />
                    </div>

                    <img className={styles.image2} src={'/assets/81871391f8f09e5fa54bc1a5df6199c2.png'} alt="alt text" />
                </div>

                <div className={styles.content_box}>
                    <img className={styles.image6} src={'/assets/cartoon_figure_kicking_another.png'} alt="alt text" />

                    <div className={styles.flex_col2}>
                        <h1 className={styles.title}>
                            Как достигаем цели
                        </h1>
                        <h1 className={styles.title1}>
                            В целом, конечно, убеждённость некоторых оппонентов представляет собой интересный эксперимент проверки направлений прогрессивного развития.
                        </h1>
                    </div>
                </div>

                <div className={styles.content_box1}>
                    <div className={styles.flex_col3}>
                        <h1 className={styles.title}>
                            Наши цели
                        </h1>
                        <h1 className={styles.title1}>
                            Таким образом, выбранный нами инновационный путь способствует подготовке и реализации экспериментов, поражающих по своей масштабности и грандиозности.
                        </h1>
                    </div>
                </div>

                <img className={styles.image7} src={foto1JPG} />
                <img className={styles.image61} src={foto1JPG} />

                <div className={styles.flex_row1}>
                    <img className={styles.image8} src={foto1JPG} />
                    <img className={styles.image8} src={foto1JPG}/>
                </div>

                <div className={styles.content_box2}>
                    <div className={styles.flex_col2}>
                        <h1 className={styles.title}>
                            Кто мы?
                        </h1>
                        <h1 className={styles.title1}>
                            В целом, конечно, убеждённость некоторых оппонентов представляет собой интересный эксперимент проверки направлений прогрессивного развития.
                        </h1>
                    </div>
                </div>

                <img className={styles.image62} src={foto1JPG} />
                <img className={styles.image9} src={foto1JPG}  />

                <div className={styles.content_box3}>
                    <img className={styles.image63} src={foto1JPG} />
                    <img className={styles.image71} src={foto1JPG} />

                    <div className={styles.flex_col4}>
                        <h1 className={styles.title}>
                            Давайте познакомимся
                        </h1>
                        <h1 className={styles.title1}>
                            Сейчас расскажем про нас поподробнее
                        </h1>
                    </div>
                </div>
            </section>




















































            <h1>Минифронт о нас</h1>
            <h1>Платформа на текущий момент (задана env):{__PLATFORM__} , {__DEV__}</h1>

            <Map/>

            <AlertUI type={"danger"} label={"Опасность alert"}><Link>URL</Link></AlertUI>
            <AlertUI type={"warning"} label={"Предупреждение alert"}><Link>URL</Link></AlertUI>
            <AlertUI type={"success"} label={"Успех alert"}><Link>URL</Link></AlertUI>
            <AlertUI label={"Дефолтная alert"}><Link>URL</Link></AlertUI>

            <Progressbar type={"money"} now={1000} all={2000} label={"1000/2000 руб."}/>
            <Progressbar type={"people"} now={100} all={234} label={"100/234 чел."}/>
            <Progressbar now={10000} all={20000} label={<div>10000/20000.</div>}/>
            <hr/>
            {//<!-- Примеры кнопок-->
            }
            <h1>Hello world: {count}</h1>
            <ButtonUI type={"agree"} callback={increment}>Инкремент</ButtonUI>
            <ButtonUI type={"danger"} callback={decrement}>Декримент</ButtonUI>
            <ButtonUI type={"neutral"} callback={decrement}>Декримент ещё один</ButtonUI>

            {//<!-- Пример dropdown хз почему не работает-->
            }
            <p>{dropdownValue}</p>
            <DropdownUI label={"Это дропдаун"} names={["1","2","3","4","5","6","7"]} setValueCallback={setDropdownValue}/>


            <hr/>
            {//<!-- Примеры полей ввода-->
            }
            <div className={"w-50"}>
                <InputUI callback={changeCheckbox} label={"checkbox"} placeholder={"пиши текст"} type={"checkbox"} value={checkbox}/>
                <InputUI callback={changeName} label={"Textarea"} placeholder={"пиши текст"} type={"textarea"} value={inputValue} rows={3}/>
                <InputUI callback={changeName} label={"Text"} placeholder={"пиши текст"} type={"text"} value={inputValue}/>
                <InputUI callback={changeName} label={"Password"} placeholder={"пиши текст"} type={"password"} value={inputValue}/>
                <InputUI callback={changeName} label={"Email"} placeholder={"пиши текст"} type={"email"} value={inputValue}/>
                <InputUI callback={changeName} label={"Phone"} placeholder={"пиши текст"} type={"phone"} value={inputValue}/>
                <InputUI callback={getFile} label={"File"} type={"file"}/>
                <InputUI callback={changeTimeValue} label={"Time"} placeholder={"пиши текст"} type={"time"} value={timeValue}/>
                <InputUI callback={changeDateValue} label={"Date"} placeholder={"пиши текст"} type={"date"} value={dateValue}/>
                <div>
                    <span>Полный фарш</span>
                    <Search placeholder={"пиши текст"}  event={search} searchSetting={searchSetting} setSearchSetting={setSearchSetting} methodHelp={methodSearchHelp}/>
                    {searchSetting ? <p>Расширеное меню поиска</p> : null}
                </div>
                <div>
                    <span>без настроек поиска</span>
                    <Search placeholder={"пиши текст"}  event={search} methodHelp={methodSearchHelp}/>
                </div>
                <div>
                    <span>без ничего</span>
                    <Search placeholder={"пиши текст"}  event={search}/>
                </div>
            </div>
            <hr/>

            {
                //Примеры списков (React.memo будет работать если передавать компоненты через useState)
            }
            <div className="d-flex">
                <ListUI className={"w-50"} Numerate={true} list={
                    ["1","2",<h5>И ТАКИЕ ЭЛЕМЕНТЫ ТОЖЕ МОГУТ БЫТЬ В СПИСКЕ</h5>]
                }/>
                <ListUI className={"w-50"} Numerate={false} list={
                    ["1","2",<h5>СПИСОК БЕЗ НУМЕРАЦИИ</h5>]
                }/>
            </div>

            <hr/>

            {//<!-- Пример модального окна-->
            }
            <div className={"d-flex justify-content-center"}>
                <ButtonUI type={"neutral"} callback={setModalActive}>Модальное окно</ButtonUI>
                <ModalUI show={modal} onHide={setModalActive} title={"Заголовок модального окна"} type={"not_preview"}>
                    <h1>Hello modal!!!</h1>
                    <div>
                        <img width={100} height={100} src={foto1JPG} alt={foto1JPG}/>
                        <img width={100} height={100} src={foto2PNG} alt={foto2PNG}/>
                        <Foto3SVG width={200} height={200}/>
                    </div>
                </ModalUI>
            </div>

            <hr/>

            {//<!-- Пример картоки с ошибкой-->
            }
            <ErrorCard />

            <hr/>

            {//<!-- Пример загрузки-->
            }
            <Loading fullscreen={false}/>

            <hr/>
            {//<!-- Пример видео-->
            }
            <div className={"d-flex justify-content-center"}>
                <Video video={MP4} poster={foto1JPG} width={750} height={500}/>
            </div>

            <hr/>
            {//<!-- Пример слайдера для медиа-->
            }
            <div className={"d-flex justify-content-center"}>
                <CarouselMediaUI imgs={[foto1JPG,foto2PNG]} video={[MP4,MP4]} poster={[foto1JPG]} controls={true}/>
            </div>

            {//<!-- Пример слайдера для html элементов и строк(не img | video)-->
            }
            <div className={"d-flex justify-content-center"}>
                <CarouselDefaultUI label={"Заголовок"} array={[
                    <Link>1</Link>,
                    <Link>2</Link>,
                    <Link>3</Link>,
                    <Link>4</Link>,
                    <Link>5</Link>,
                    <Link>6</Link>,
                    <Link>7</Link>,
                    <Link>8</Link>,
                    <Link>9</Link>,
                    <Link>10</Link>,
                ]} />
            </div>

            {
                //Пример пагинации
            }
            <Pagination methodLoad={LoadPost}/>

        </div>
    );
};

export default About;